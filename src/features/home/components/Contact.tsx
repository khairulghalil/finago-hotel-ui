interface ContactProps {}

function Contact({}: ContactProps) {
  return (
    <>
      <section
        id="contact"
        className="contact container-fluid d-flex align-items-center justify-content-center m-auto p-3"
      >
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="400"
          className="container "
        >
          <div className="row p-1">
            <div className="col-6 align-items-center justify-content-center m-auto p-5 ps-0">
              <h1 className="fw-boldest mb-3">Contact Us</h1>
              <span className="text-muted">
                Our dedicated concierge team is available 24/7 to ensure your
                stay is nothing short of perfection. Whether you have a special
                request or need assistance with your booking, we are here to
                help.
              </span>
              <p className="mt-4">
                <i className="bi bi-telephone flex-shrink-0 me-3"></i>
                +6010-5757340
              </p>
              <p>
                <i className="bi bi-envelope flex-shrink-0 me-3"></i>
                khairulmuhdghalil@gmail.com
              </p>
              <p>
                <i className="bi bi-geo-alt flex-shrink-0 me-3"></i>
                Damansara, Selangor
              </p>
              <p>
                <i className="bi bi-clock flex-shrink-0 me-3"></i>
                24/7 Customer Support
              </p>
            </div>
            <div className="col-6 d-flex align-items-center justify-content-center m-auto pe-0">
              <img
                src="./src/assets/img/contact.png"
                alt="Contact"
                className="img-fluid rounded-4"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
