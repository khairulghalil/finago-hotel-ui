import CountUp from "react-countup";

interface OverviewProps {}

function Overview({}: OverviewProps) {
  return (
    <>
      <section
        id="home"
        className="overview container-fluid d-flex align-items-center justify-content-center m-auto"
      >
        <div className="row p-0 p-lg-4 px-4">
          <div
            data-aos="fade-up"
            className="col-lg-6 align-items-center justify-content-center m-auto px-0 px-lg-5 ow-left5"
          >
            <div className="text-center d-block d-lg-none">
              <img
                src="/img/logo-dark.png"
                className="me-2 img-fluid w-75"
                alt="Logo"
              />
            </div>
            <h1 className="fw-boldest mt-lg-0 mt-3">
              Luxury Redefined in Every Stay
            </h1>
            <p className="mt-4">
              Experience unparalleled comfort and sophistication at our premium
              hotel. From elegant suites to world-class amenities, every moment
              of your stay is crafted to perfection.
            </p>
            <div className="d-flex flex-row gap-1 mt-4 mb-2 justify-content-center justify-content-md-start fw-boldest d-none d-lg-flex">
              <i className="bi bi-wifi flex-shrink-0 me-2"></i>
              <span className="me-5">Complimentary WiFi</span>
              <i className="bi bi-car-front flex-shrink-0 me-2"></i>
              <span className="me-5">Valet Parking</span>
              <i className="bi bi-cup-hot flex-shrink-0 me-2"></i>
              <span className="">24/7 Room Service</span>
            </div>
            <button className="btn btn-primary fw-bold me-0 mt-5 me-lg-3">
              Book Now
            </button>
            <button className="btn btn-secondary fw-bold mt-2 mt-lg-5">
              Explore
            </button>
          </div>
          <div
            data-aos="slide-left"
            className="col-lg-6 d-flex align-items-center justify-content-center m-auto d-none d-lg-block"
          >
            <img
              src="/img/overview.png"
              alt="Overview"
              className="img-fluid rounded-4"
            />
          </div>

          <div
            data-aos="slide-up"
            className="counter row w-75 m-auto mb-0 text-center d-none d-lg-flex"
          >
            <hr className="my-5" />
            <div
              className="col-3"
              style={{ borderRight: "1px solid rgba(128, 128, 128, 0.69)" }}
            >
              <h2 className="fw-boldest">
                <CountUp end={150} duration={1.5} separator="," />
              </h2>
              <p className="text-muted fw-bold text-uppercase">Luxury Rooms</p>
            </div>
            <div
              className="col-3"
              style={{ borderRight: "1px solid rgba(128, 128, 128, 0.69)" }}
            >
              <h2 className="fw-boldest">
                <CountUp end={5} duration={1.5} separator="," />
              </h2>
              <p className="text-muted fw-bold text-uppercase">Star Rating</p>
            </div>
            <div
              className="col-3"
              style={{ borderRight: "1px solid rgba(128, 128, 128, 0.69)" }}
            >
              <h2 className="fw-boldest">
                <CountUp end={24} duration={2.5} separator="," />
              </h2>
              <p className="text-muted fw-bold text-uppercase">Hour Service</p>
            </div>
            <div className="col-3">
              <h2 className="fw-boldest">
                <CountUp end={98} duration={1.5} separator="," />
              </h2>
              <p className="text-muted fw-bold text-uppercase">
                Guest Satisfaction
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Overview;
