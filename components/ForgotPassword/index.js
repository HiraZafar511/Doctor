import Link from "next/link";

const index = () => {
  return (
    <div className="forgot-password">
      <div className="container-fluid">
        <div className="row">
          <div class="col-md-8 offset-md-2">
            <div class="account-content">
              <div class="row align-items-center justify-content-center">
                <div class="col-md-7 col-lg-6 login-left">
                  <img
                    src="/images/login-banner.png"
                    class="img-fluid"
                    alt="Login Banner"
                  />
                </div>
                <div class="col-md-12 col-lg-6 login-right">
                  <div class="login-header">
                    <h3>Forgot Password?</h3>
                    <p class="small text-muted">
                      Enter your email to get a password reset link
                    </p>
                  </div>
                  <form>
                    <div class="form-group form-focus">
                      <input type="email" class="form-control floating" placeholder="Email" />
                    
                    </div>
                    <div class="text-right">
                      


                      <Link href="/login">
                      <a href="#" class="forgot-link"> Remember your password?</a>
                    </Link>



                    </div>
                    <button
                      class="btn btn-primary btn-block btn-lg login-btn"
                      type="submit"
                    >
                      Reset Password
                    </button>
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
