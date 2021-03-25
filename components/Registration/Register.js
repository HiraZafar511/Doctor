const Reg = () => {
  return (
    <div className="registration">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="account-content">
              <div className="row align-items-center justify-content-center">
                <div className="col-md-12 col-lg-6 login-right">
                  <div className="login-header">
                    <h3>
                      Mentor Register
                      <a href="/app/Mentor/mentor-register">Not a Mentor?</a>
                    </h3>
                  </div>
                  <form action="/app/Mentor/dashboard">
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
                        type="password"
                        className="form-control floating"
                        placeholder="Create Password"
                      />
                    </div>
                    <div className="text-right">
                      <a className="forgot-link" href="/login">
                        Already have an account?
                      </a>
                    </div>
                    <button
                      className="btn btn-block btn-lg login-btn"
                      type="submit"
                    >
                      Signup
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

export default Reg;
