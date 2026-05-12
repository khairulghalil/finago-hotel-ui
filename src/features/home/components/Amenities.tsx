interface AmenitiesProps {}

function Amenities({}: AmenitiesProps) {
  return (
    <>
      <section
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="400"
        id="amenities"
        className="container amenities d-flex flex-column text-center"
      >
        <div className="section-title mt-4 mb-4">
          <h2 className="fw-boldest text-uppercase">Amenities</h2>
          <p className="text-muted m-0">
            Experience unparalleled comfort and convenience with our world-class
            amenities designed to elevate your stay at Finago Hotel.
          </p>
        </div>
        <div className="row">
          <div className="col-4 px-4">
            <div className="card text-start mb-5">
              <div className="card-body p-0">
                <img
                  src="./src/assets/img/wifi.png"
                  alt="High-Speed Internet"
                  className="img-fluid card-img-top"
                />
                <div className="p-3">
                  <h5 className="card-title fw-boldest my-3">
                    High-Speed Internet
                  </h5>
                  <p className="card-text text-muted">
                    Complimentary wireless internet access throughout the hotel
                    premises with enterprise-grade security and unlimited
                    bandwidth for all your connectivity needs.
                  </p>
                  <div className="d-flex flex-row gap-1 mt-4 mb-2 justify-content-center justify-content-md-start fw-boldest">
                    <i className="bi bi-check-all flex-shrink-0 me-1"></i>
                    <span className="me-3">24/7 Available</span>
                    <i className="bi bi-check-all flex-shrink-0 me-1"></i>
                    <span className="">High Speed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 px-4">
            <div className="card text-start mb-5">
              <div className="card-body p-0">
                <img
                  src="./src/assets/img/rooftop.png"
                  alt="Rooftop Pool"
                  className="card-img-top"
                />
                <div className="p-3">
                  <h5 className="card-title fw-boldest my-3">Rooftop Pool</h5>
                  <p className="card-text text-muted">
                    Luxurious rooftop swimming pool with breathtaking city
                    skyline views. Features heated water, poolside service, and
                    premium lounging areas for ultimate relaxation.
                  </p>
                  <div className="d-flex flex-row gap-1 mt-4 mb-2 justify-content-center justify-content-md-start fw-boldest">
                    <i className="bi bi-check-all flex-shrink-0 me-1"></i>
                    <span className="me-3">Heated Pool</span>
                    <i className="bi bi-check-all flex-shrink-0 me-1"></i>
                    <span className="">City Views</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 px-4">
            <div className="card text-start mb-5">
              <div className="card-body p-0">
                <img
                  src="./src/assets/img/valet.png"
                  alt="Valet Parking"
                  className="card-img-top"
                />
                <div className="p-3">
                  <h5 className="card-title fw-boldest my-3">Valet Parking</h5>
                  <p className="card-text text-muted">
                    Premium valet parking service with secure underground
                    facility. Professional attendants ensure your vehicle is
                    safely parked and readily available upon request.
                  </p>
                  <div className="d-flex flex-row gap-1 mt-4 mb-2 justify-content-center justify-content-md-start fw-boldest">
                    <i className="bi bi-check-all flex-shrink-0 me-1"></i>
                    <span className="me-3">Secure</span>
                    <i className="bi bi-check-all flex-shrink-0 me-1"></i>
                    <span className="">Valet Service</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 px-4">
            <div className="card text-start mb-5">
              <div className="card-body p-0">
                <img
                  src="./src/assets/img/fitness.png"
                  alt="Modern Fitness Center"
                  className="card-img-top"
                />
                <div className="p-3">
                  <h5 className="card-title fw-boldest my-3">
                    Modern Fitness Center
                  </h5>
                  <p className="card-text text-muted">
                    Cutting-edge fitness facility featuring premium equipment,
                    personal training services, and wellness programs designed
                    to maintain your health routine while traveling.
                  </p>
                  <div className="d-flex flex-row gap-1 mt-4 mb-2 justify-content-center justify-content-md-start fw-boldest">
                    <i className="bi bi-check-all flex-shrink-0 me-1"></i>
                    <span className="me-3">24/7 Access</span>
                    <i className="bi bi-check-all flex-shrink-0 me-1"></i>
                    <span className="">Personal Training</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 px-4">
            <div className="card text-start mb-5">
              <div className="card-body p-0">
                <img
                  src="./src/assets/img/restaurant.png"
                  alt="Signature Restaurant"
                  className="card-img-top"
                />
                <div className="p-3">
                  <h5 className="card-title fw-boldest my-3">
                    Signature Restaurant
                  </h5>
                  <p className="card-text text-muted">
                    Award-winning culinary experience featuring international
                    cuisine crafted by renowned chefs. Elegant atmosphere with
                    extensive wine selection and impeccable service.
                  </p>
                  <div className="d-flex flex-row gap-1 mt-4 mb-2 justify-content-center justify-content-md-start fw-boldest">
                    <i className="bi bi-check-all flex-shrink-0 me-1"></i>
                    <span className="me-3">Fine Dining</span>
                    <i className="bi bi-check-all flex-shrink-0 me-1"></i>
                    <span className="">Wine Selection</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 px-4">
            <div className="card text-start mb-5">
              <div className="card-body p-0">
                <img
                  src="./src/assets/img/spa.png"
                  alt="Luxury Spa"
                  className="card-img-top"
                />
                <div className="p-3">
                  <h5 className="card-title fw-boldest my-3">Luxury Spa</h5>
                  <p className="card-text text-muted">
                    Tranquil sanctuary offering therapeutic treatments,
                    rejuvenating massages, and holistic wellness experiences.
                    Escape the everyday stress in our serene environment.
                  </p>
                  <div className="d-flex flex-row gap-1 mt-4 mb-2 justify-content-center justify-content-md-start fw-boldest">
                    <i className="bi bi-check-all flex-shrink-0 me-1"></i>
                    <span className="me-3">Full Service</span>
                    <i className="bi bi-check-all flex-shrink-0 me-1"></i>
                    <span className="">Wellness Programs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Amenities;
