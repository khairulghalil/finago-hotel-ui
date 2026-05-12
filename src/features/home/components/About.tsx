import CountUp from "react-countup";
interface AboutProps {}

function About({}: AboutProps) {
  return (
    <>
      <section
        id="about"
        className="about container-fluid d-flex align-items-center justify-content-center m-auto p-3"
      >
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="400"
          className="container "
        >
          <div className="row p-1">
            <div className="col-6 align-items-center justify-content-center m-auto p-5 ps-0 about-left">
              <h1 className="fw-boldest">Welcome to Finago Hotel</h1>
              <h4 className="fw-bold mt-4 mb-4">
                Where luxury meets tranquility in the heart of nature's
                paradise.
              </h4>
              <p className="text-muted">
                Nestled among rolling hills and pristine landscapes, Finago
                Hotel has been offering exceptional hospitality for over three
                decades. Our commitment to excellence and attention to detail
                creates an unforgettable experience for discerning travelers
                seeking both comfort and adventure.
              </p>
              <div className="counter row m-auto mb-3 mt-4 text-center">
                <div className="col-3">
                  <h2 className="fw-boldest">
                    <CountUp end={150} duration={1.5} separator="," />
                  </h2>
                  <p className="text-muted fw-bold">Luxury Rooms</p>
                </div>
                <div className="col-3">
                  <h2 className="fw-boldest">
                    <CountUp end={5} duration={1.5} separator="," />
                  </h2>
                  <p className="text-muted fw-bold">Guest Satisfaction</p>
                </div>
                <div className="col-3">
                  <h2 className="fw-boldest">
                    <CountUp end={24} duration={2.5} separator="," />
                  </h2>
                  <p className="text-muted fw-bold">Years of Excellence</p>
                </div>
              </div>
              <button className="btn btn-primary fw-bold me-3 px-4">
                Book Now
              </button>
              <button className="btn btn-secondary fw-bold px-4">
                View Rooms
              </button>
            </div>
            <div className="col-6 d-flex align-items-center justify-content-center m-auto">
              <img
                src="./src/assets/img/about.png"
                alt="About Us"
                className="img-fluid rounded-4"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
