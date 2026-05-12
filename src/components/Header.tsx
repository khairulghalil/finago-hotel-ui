import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface HeaderProps {}

function Header({}: HeaderProps) {
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

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

    // Only enable scroll spy on home page
    if (location.pathname === "/") {
      window.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => window.removeEventListener("scroll", handleScroll);
    } else if (location.pathname === "/room") {
      setActiveSection("room");
    }
  }, [location.pathname]);

  return (
    <>
      <header id="header" className="header fixed-top">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
          <div className="container-fluid px-0 mx-lg-5">
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
                  <span
                    className={`nav-link ${activeSection === "home" ? "active" : ""}`}
                    onClick={() => handleSectionClick("home")}
                  >
                    Home
                  </span>
                </li>
                <li className="nav-item">
                  <span
                    className={`nav-link ${activeSection === "about" ? "active" : ""}`}
                    onClick={() => handleSectionClick("about")}
                  >
                    About
                  </span>
                </li>
                <li className="nav-item">
                  <span
                    className={`nav-link ${activeSection === "room" ? "active" : ""}`}
                    onClick={() => navigate("/room")}
                  >
                    Rooms
                  </span>
                </li>
                <li className="nav-item">
                  <span
                    className={`nav-link ${activeSection === "amenities" ? "active" : ""}`}
                    onClick={() => handleSectionClick("amenities")}
                  >
                    Amenities
                  </span>
                </li>
                <li className="nav-item">
                  <span
                    className={`nav-link ${activeSection === "contact" ? "active" : ""}`}
                    onClick={() => handleSectionClick("contact")}
                  >
                    Contact
                  </span>
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
