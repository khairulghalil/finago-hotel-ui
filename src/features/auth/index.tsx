import "./auth.css";
import { useState } from "react";
import { authApi } from "../../api/authService";
import toast, { Toaster } from "react-hot-toast";
import { setUser } from "../../utils/auth";

function Login() {
  const defaultSignInParams = { email: "", password: "", rememberMe: false };
  const [signInParams, setSignInParams] = useState(defaultSignInParams);

  const signIn = async () => {
    try {
      const res = await authApi.signIn(signInParams);
      const user = res.data;

      setUser(user);

      const modalElement = document.getElementById("loginModal");
      if (modalElement) {
        const modalInstance = (window as any).bootstrap.Modal.getInstance(
          modalElement,
        );
        modalInstance?.hide();
      }
      return res;
    } catch (error) {
      setSignInParams(defaultSignInParams);
      toast.error("Invalid credentials. Please try again.", {
        className: "toast-error",
      });
      return [];
    }
  };

  return (
    <>
      <Toaster />
      <div className="modal fade" id="loginModal" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="login d-flex justify-content-center align-items-center">
              <div className="content row">
                <div className="col-lg-6 m-auto justify-content-center align-items-center text-center">
                  <div className="text-center mt-4">
                    <img
                      src="/img/logo.png"
                      className="img-fluid img-logo d-none d-lg-block mx-auto d-block"
                      alt="Logo"
                    />
                    <p className="text-white mt-1">
                      Luxury Redefined in Every Stay
                    </p>
                    <p className="text-grey mt-5">
                      © 2024 Finago Hotel. All rights reserved.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 p-5">
                  <h3 className="mt-4 text-center">Sign In</h3>
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    className="form-control"
                    placeholder="Email Address"
                    value={signInParams.email}
                    onChange={(e) =>
                      setSignInParams({
                        ...signInParams,
                        email: e.target.value,
                      })
                    }
                  />
                  <input
                    type="password"
                    name="password"
                    autoComplete="current-password"
                    className="form-control mt-3"
                    placeholder="Password"
                    value={signInParams.password}
                    onChange={(e) =>
                      setSignInParams({
                        ...signInParams,
                        password: e.target.value,
                      })
                    }
                  />
                  <div className="row">
                    <div className="col-6">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="rememberMe"
                          checked={signInParams.rememberMe}
                          onChange={(e) =>
                            setSignInParams({
                              ...signInParams,
                              rememberMe: e.target.checked,
                            })
                          }
                        />
                        <label
                          className="form-check-label text-white ms-1"
                          htmlFor="rememberMe"
                        >
                          Keep me signed in
                        </label>
                      </div>
                    </div>
                    <div className="col-6 text-end">
                      <button
                        className="btn btn-login mt-4 px-5"
                        onClick={signIn}
                      >
                        Sign In
                      </button>
                    </div>
                  </div>
                  <div className="text-center mt-5">
                    <button className="btn btn-google px-4 w-100">
                      <img
                        src="/img/google-icon.svg"
                        alt="Google Logo"
                        className="me-3 pb-1"
                      />
                      Sign In with Google
                    </button>
                    <button className="btn btn-signup px-4 w-100 mt-3">
                      Forgot Password
                    </button>
                    <p className="text-white mt-4">
                      Don't have an account?
                      <a
                        href="#"
                        className="text-decoration-none text-primary ms-2"
                      >
                        Sign Up
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
