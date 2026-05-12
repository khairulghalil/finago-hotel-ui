import { useState, useEffect } from "react";

interface HeaderProps {}

function Header({}: HeaderProps) {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = section as HTMLElement;
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(element.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header id="header" className="header fixed-top">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
          <div className="container-fluid mx-1 mx-lg-5">
            <button
              className="navbar-toggler shadow-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mainNavbar"
              aria-controls="mainNavbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="bi bi-list"></i>
            </button>

            <div className="collapse navbar-collapse" id="mainNavbar">
              <img
                src="./src/assets/img/logo.png"
                className="me-2 img-fluid"
                alt="Logo"
              />
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mt-2 mt-lg-0">
                <li className="nav-item">
                  <a
                    className={`nav-link ${activeSection === "home" ? "active" : ""}`}
                    href="#home"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${activeSection === "about" ? "active" : ""}`}
                    href="#about"
                  >
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${activeSection === "rooms" ? "active" : ""}`}
                    href="#rooms"
                  >
                    Rooms
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${activeSection === "amenities" ? "active" : ""}`}
                    href="#amenities"
                  >
                    Amenities
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${activeSection === "contact" ? "active" : ""}`}
                    href="#contact"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
