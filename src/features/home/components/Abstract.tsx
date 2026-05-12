interface AbstractProps {}

function Abstract({}: AbstractProps) {
  return (
    <>
      <section className="abstract container-fluid d-flex align-items-center justify-content-center m-auto p-3">
        <div data-aos="fade-up" className="container ">
          <div className="row p-1">
            <div className="col-6 align-items-center justify-content-center m-auto p-5 ps-0 abstract-left">
              <h1 className="fw-boldest mb-3">
                Experience Luxury Like Never Before
              </h1>
              <span className="text-muted">
                Nestled among rolling hills and pristine landscapes, Finago
                Hotel has been offering exceptional hospitality for over three
                decades. Our commitment to excellence and attention to detail
                creates an unforgettable experience for discerning travelers
                seeking both comfort and adventure.
              </span>
              <p className="mt-4">
                <i className="bi bi-check-all flex-shrink-0 me-2"></i>
                Complimentary breakfast and Wi-Fi
              </p>
              <p>
                <i className="bi bi-check-all flex-shrink-0 me-2"></i>
                24/7 concierge and room service
              </p>
              <p>
                <i className="bi bi-check-all flex-shrink-0 me-2"></i>
                State-of-the-art spa and fitness center
              </p>
              <p>
                <i className="bi bi-check-all flex-shrink-0 me-2"></i>
                Prime location with stunning city views
              </p>
            </div>
            <div className="col-6 d-flex align-items-center justify-content-center m-auto pe-0">
              <img
                src="./src/assets/img/abstract.png"
                alt="Abstract"
                className="img-fluid rounded-4"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Abstract;
