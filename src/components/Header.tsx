import { useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/img/logo.svg";

interface HeaderProps {}

function Header({}: HeaderProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path: string) => {
    navigate("/" + path);
  };

  const isActive = (path: string) => {
    return location.pathname === "/" + path;
  };

  return (
    <>
      <header className="sticky-top d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-0 shadow-sm">
        <div className="container-fluid">
          <div className="row w-100 m-0">
            <div
              className="logo col-6 d-flex justify-content-start align-items-center"
              onClick={() => navigate("/")}
            >
              <img
                src="./src/assets/img/logo.png"
                className="me-2 img-fluid"
                alt="Logo"
              />
            </div>
            <div className="col-6 justify-content-end">
              <div className="d-flex justify-content-end">
                {/* <button
                  className={`mx-2 mr-md-auto font-weight-normal ${
                    isActive("profile") ? "active" : ""
                  }`}
                  onClick={() => handleNavigation("profile")}
                >
                  Profile
                </button>
                <button
                  className={`mx-2 mr-md-auto font-weight-normal ${isActive("forum") ? "active" : ""}`}
                  onClick={() => handleNavigation("forum")}
                >
                  Forum
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
