interface FooterProps {}

function Footer({}: FooterProps) {
  return (
    <>
      <footer className="footer">
        <div className="container pb-4">
          <div className="row pt-5 mb-4">
            <div className="col-4 d-flex flex-column align-items-start justify-content-center">
              <div className="d-flex">
                <img
                  src="./src/assets/img/logo.png"
                  className="me-2 img-fluid"
                  alt="Logo"
                />
              </div>
            </div>
            <div className="col-8 text-end px-4">
              <div className="d-flex gap-4 align-items-center mb-5">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#rooms">Rooms</a>
                <a href="#amenities">Amenities</a>
                <a href="#contact">Contact</a>
              </div>
              <p className="mb-3 text-start">
                Exclusive booking platform for luxury stays in Malaysia. Easy,
                secure, and guarantees guest privacy. Book your dream room with
                us today!
              </p>
              <p className="text-start m-0 copyright">
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
