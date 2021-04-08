import Link from "next/link";

const index = () => {
  return (
    <div className="registration">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div class="account-content">
              <div class="row align-items-center justify-content-center">
                <div class="col-md-7 col-lg-6 login-left">
                  <img
                    src="/images/login-banner.png"
                    class="img-fluid"
                    alt="Doccure Login"
                  />
                </div>
                <div class="col-md-12 col-lg-6 login-right">
                  <div className="login-header">
                    <h3>
                      Patient Register
                      <Link href="/registration">
                        <a href="#">Are you a Doctor?</a>
                      </Link>
                    </h3>
                  </div>
                  <form>
                    <div className="form-group form-focus">
                      <input
                        type="text"
                        className="form-control floating"
                        placeholder="Name"
                      />
                    </div>

                    <div className="form-group form-focus">
                      <input
                        type="text"
                        className="form-control floating"
                        placeholder="Mobile Number"
                      />
                    </div>

                    <div className="form-group form-focus">
                      <input
                        type="text"
                        className="form-control floating"
                        placeholder="Create Password"
                      />
                    </div>

                    <div class="terms-and-policy pt-2 pb-2">
                      <input
                        type="checkbox"
                        required=""
                        name="checkbox"
                        value="check"
                        id="agree"
                      />
                      <span class="agree">
                        I agree to these{" "}
                        <span class="terms">
                          <a href="term-condition.html" target="_blank">
                            Terms of Use
                          </a>{" "}
                          and{" "}
                          <a href="privacy-policy.html" target="_blank">
                            Privacy Policy
                          </a>
                        </span>
                      </span>
                    </div>

                    <div className="text-right">
                      <Link href="/login">
                        <a href="#" className="forgot-link2">
                          Already have an account?
                        </a>
                      </Link>
                    </div>
                    <button
                      className="btn btn-block btn-lg login-btn"
                      type="submit"
                    >
                      Login
                    </button>
                    <div className="login-or">
                      <span className="or-line"></span>
                      <span className="span-or">or</span>
                    </div>
                    <div className="row form-row social-login">
                      <div className="col-6">
                        <a
                          href="https://www.facebook.com/"
                          target="_blank"
                          className="btn btn-facebook btn-block"
                        >
                          <i className="fab fa-facebook-f mr-1"></i> Login
                        </a>
                      </div>
                      <div className="col-6">
                        <a
                          href="https://mail.google.com/"
                          target="_blank"
                          className="btn btn-google btn-block"
                        >
                          <i className="fab fa-google mr-1"></i> Login
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
