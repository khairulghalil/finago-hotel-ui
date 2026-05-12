interface HeaderProps {}

function Header({}: HeaderProps) {
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
                  <a className="nav-link" href="#home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#rooms">
                    Rooms
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#amenities">
                    Amenities
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
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
