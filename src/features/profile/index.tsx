import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <h2>Profile</h2>
      </div>
      <div>
        <button onClick={() => navigate("/")}>Back to Home</button>
      </div>
    </>
  );
}

export default Profile;
