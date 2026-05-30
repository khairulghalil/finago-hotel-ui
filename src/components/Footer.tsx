interface FooterProps {}

function Footer({}: FooterProps) {
  return (
    <>
      <footer className="footer">
        <div className="container pb-4">
          <div className="row pt-5 mb-4">
            <div className="col-lg-4 d-flex flex-column align-items-start justify-content-center">
              <div className="d-flex">
                <img
                  src="/img/logo.png"
                  className="me-2 img-fluid d-none d-lg-block"
                  alt="Logo"
                />
              </div>
            </div>
            <div className="col-lg-8 text-end px-4 text-center text-lg-start justify-content-center justify-content-lg-end mx-auto">
              <div className="d-flex flex-row gap-4 mb-4 justify-content-center text-center justify-content-lg-start">
                <i className="bi bi-facebook flex-shrink-0"></i>
                <i className="bi bi-tiktok flex-shrink-0"></i>
                <i className="bi bi-instagram flex-shrink-0"></i>
                <i className="bi bi-whatsapp flex-shrink-0 me-0"></i>
              </div>
              <p className="mb-3">
                Exclusive booking platform for luxury stays in Malaysia. Easy,
                secure, and guarantees guest privacy. Book your dream room with
                us today!
              </p>
              <p className="m-0 copyright">
                &copy; {new Date().getFullYear()} FinagoHotel. All rights
                reserved.
              </p>
            </div>
          </div>
          <div className="disclaimer">
            <p className="m-0 p-5 py-3 text-center">
              <span className="text-warning">⚠️ Disclaimer : </span>
              Information and rates shown are subject to change without notice.
              Room images are representative; actual room layout and furnishings
              may vary.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
