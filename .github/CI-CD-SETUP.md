# CI/CD Setup Guide

## GitHub Secrets Required

Make sure you have added the following secrets in your GitHub repository:
**Settings → Secrets and variables → Actions → Repository secrets**

### Required Secrets:

1. **AWS_ACCESS_KEY_ID**
   - Your AWS IAM user access key ID
   - Get this from AWS IAM Console

2. **AWS_SECRET_ACCESS_KEY**
   - Your AWS IAM user secret access key
   - Get this from AWS IAM Console (only shown once during creation)

3. **AWS_REGION**
   - The AWS region where your S3 bucket is located
   - Example: `us-east-1`, `ap-southeast-1`, etc.

4. **AWS_S3_BUCKET**
   - The name of your S3 bucket (not the full ARN)
   - Example: `my-finago-hotel-bucket`

5. **VITE_BACKEND_URL** (Optional)
   - Your production backend API URL
   - Example: `https://api.finagohotel.online/api`
   - If not set, the build will use the default from your .env file

6. **AWS_CLOUDFRONT_DISTRIBUTION_ID** (Optional)
   - Your CloudFront distribution ID if you're using CloudFront
   - Example: `E1234567890ABC`
   - Leave empty if not using CloudFront

## IAM User Permissions

Your AWS IAM user needs the following permissions:

### For S3:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:PutObject",
        "s3:GetObject",
        "s3:DeleteObject",
        "s3:ListBucket"
      ],
      "Resource": [
        "arn:aws:s3:::your-bucket-name",
        "arn:aws:s3:::your-bucket-name/*"
      ]
    }
  ]
}
```

### For CloudFront (if using):

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": ["cloudfront:CreateInvalidation"],
      "Resource": "arn:aws:cloudfront::*:distribution/*"
    }
  ]
}
```

## S3 Bucket Configuration

### Enable Static Website Hosting:

1. Go to your S3 bucket → Properties → Static website hosting
2. Enable it and set:
   - Index document: `index.html`
   - Error document: `index.html` (for client-side routing)

### Bucket Policy (for public access):

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::your-bucket-name/*"
    }
  ]
}
```

## How the Workflow Works

1. **Trigger**: Runs on push to `main` or `master` branch, and on pull requests
2. **Build**:
   - Checks out code
   - Sets up Node.js 18
   - Installs dependencies using `npm ci`
   - Builds the project with `npm run build`
3. **Deploy**:
   - Configures AWS credentials
   - Syncs the `dist/` folder to S3 bucket
   - (Optional) Invalidates CloudFront cache for instant updates

## Testing the Workflow

1. Commit and push this workflow file to your repository
2. Go to GitHub → Actions tab
3. You should see the workflow running
4. Check the logs for any errors

## Troubleshooting

- **Build fails**: Check if all dependencies are correctly listed in package.json
- **AWS authentication fails**: Verify your AWS credentials are correct in GitHub secrets
- **S3 sync fails**: Verify IAM permissions and bucket name
- **CloudFront invalidation fails**: Check distribution ID and IAM permissions

## Manual Deployment

To deploy manually from your local machine:

```bash
# Build the project
npm run build

# Deploy to S3 (requires AWS CLI configured)
aws s3 sync dist/ s3://your-bucket-name --delete

# Invalidate CloudFront cache (if using)
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
```
