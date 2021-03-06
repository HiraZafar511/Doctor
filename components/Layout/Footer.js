import Link from "next/link";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget footer-about">
                <div className="footer-logo">
                  <img src="/images/footer-logo.png" alt="logo" />
                </div>
                <div className="footer-about-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <div className="social-icon">
                    <ul>
                      <li>
                        <a href="https://www.facebook.com/" target="_blank">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/" target="_blank">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/" target="_blank">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/" target="_blank">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://dribbble.com/" target="_blank">
                          <i className="fab fa-dribbble"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="footer-widget footer-menu">
                <h2 className="footer-title">For Patients</h2>
                <ul>
                  <li>
                    <i className="fas fa-angle-right"></i>
                    <Link href="/search-doctor">
                       <a href="#" >Search for Doctors</a>
                    </Link>
                  </li>
                  <li>
                    <i className="fas fa-angle-right"></i>
                    <Link href="/login">
                       <a href="#">Login</a>
                    </Link>
                  </li>
                  <li>
                    <i className="fas fa-angle-right"></i>
                    <Link href="/patientRegistration">
                       <a href="#" >Register</a>
                    </Link>
                  </li>
                  <li>
                    <i className="fas fa-angle-right"></i>
                    <Link href="/booking">
                      <a href="booking.html">Booking</a>
                    </Link>
                  </li>
                  <li>
                    <i className="fas fa-angle-right"></i>
                    <Link href="/patientDashboard">
                       <a href="#">Patient Dashboard</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="footer-widget footer-menu">
                <h2 className="footer-title">For Doctors</h2>
                <ul>
                  <li>
                    <i className="fas fa-angle-right"></i>
                    <Link href="/appointments">
                    <Link href="/appointments">
                       <a href="#">Appointments</a>
                    </Link>
                    </Link>
                  </li>
                
                  <li>
                    <i className="fas fa-angle-right"></i>
                    <Link href="/login">
                       <a href="#" >Login</a>
                    </Link>
                  </li>
                  <li>
                    <i className="fas fa-angle-right"></i>
                    <Link href="/registration">
                       <a href="#" >Register</a>
                    </Link>
                  </li>
                  <li>
                    <i className="fas fa-angle-right"></i>
                    <Link href="/dashboard">
                       <a href="#">Doctor Dashboard</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="footer-widget footer-contact">
                <h2 className="footer-title">Contact Us</h2>
                <div className="footer-contact-info">
                  <div className="footer-address">
                    <span>
                      <i className="fas fa-map-marker-alt"></i>
                    </span>
                    <p>
                      3556 Beech Street, San Francisco,
                      <br /> California, CA 94108
                    </p>
                  </div>
                  <p>
                    <i className="fas fa-mobile-alt"></i>
                    +1 315 369 5943
                  </p>
                  <p className="mb-0">
                    <i className="fas fa-envelope"></i>
                    doccure@example.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container-fluid">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 col-lg-6 btm">
                <div className="copyright-text">
                  <p className="mb-0">?? 2020 Doccure. All rights reserved.</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 ">
                <div className="copyright-menu">
                  <ul className="policy-menu">
                    <li>
                    <Link href="/termsCondition">
                       <a href="#" className="listPad">Terms and Conditions
</a>
                    </Link>
                    </li>
                    <li>
                    <Link href="/policy">
                       <a href="#" className="listPad">Policy
</a>
                    </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
