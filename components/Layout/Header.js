import Link from "next/link";
const Header = () => {
  return (
    <div className="header">
      <nav className="navbar ">
        <div className="container-fluid wrap">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">
              <img src="/images/logo.png" />
            </a>
          </div>
          <div className="collapse navbar-collapse pad" id="myNavbar">
            <ul className="nav navbar-nav flex-D">
              <li className="active">
                <Link href="/">
                  <a href="#">Home</a>
                </Link>
              </li>
              <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                  Doctors <i className="fas fa-chevron-down"></i>
                </a>

                <ul className="dropdown-menu ">
                  <li className="hove">
                    <Link href="/dashboard">
                      <a href="#">Doctor Dashboard</a>
                    </Link>
                  </li>
                  <li className="hove">
                    <Link href="/appointments">
                      <a href="#">Appointments</a>
                    </Link>
                  </li>
                  <li className="hove">
                    <Link href="/schedual">
                      <a href="#">Schedule Timing</a>
                    </Link>
                  </li>
                  <li className="hove">
                    <Link href="/patientList">
                      <a href="#">Patient List</a>
                    </Link>
                  </li>
                  <li className="hove">
                    <a href="#">Patients Profile</a>
                  </li>
                  <li className="hove">
                    <Link href="/booking">
                      <a href="booking.html">Booking</a>
                    </Link>
                  </li>
                  <li className="hove">
                    <Link href="/profileSetting">
                      <a href="#">Profile Setting</a>
                    </Link>
                  </li>
                  <li className="hove">
                    <a href="#">Reviews</a>
                  </li>
                  <li className="hove">
                    <Link href="/invoices">
                      <a href="#">Invoices</a>
                    </Link>
                  </li>
                  <li className="hove">
                    <Link href="/registration">
                      <a href="#">Doctor Register</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                  Patients <i className="fas fa-chevron-down"></i>
                </a>
                <ul className="dropdown-menu ">
                  <li className="dropdown hove">
                    <a
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      href="#"
                    >
                      Doctors <i className="fas fa-chevron-right"></i>
                    </a>
                    <ul className="dropdown-menu ">
                      <li className="hove">
                        <Link href="/mapGrid">
                          <a href="#">Map Grip</a>
                        </Link>
                      </li>
                      <li className="hove">
                        <Link href="/mapList">
                          <a href="#">Map List</a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="hove">
                    <a href="search.html">Search Doctor</a>
                  </li>
                  <li className="hove">
                    <Link href="/doctorProfile">
                      <a href="#">Doctor Profile</a>
                    </Link>
                  </li>
                  <li className="hove">
                    <Link href="/booking">
                      <a href="booking.html">Booking</a>
                    </Link>
                  </li>
                  <li className="hove">
                    <Link href="/checkout">
                      <a href="#">Checkout</a>
                    </Link>
                  </li>
                  <li className="hove">
                    <Link href="/bookingSuccess">
                      <a href="#">Booking Success</a>
                    </Link>
                  </li>
                  <li className="hove">
                    <a href="patient-dashboard.html">Patient Dashboard</a>
                  </li>
                  <li className="hove">
                    <a href="favourites.html">Favourites</a>
                  </li>
                  <li className="hove">
                    <a href="chat.html">Chat</a>
                  </li>
                  <li className="hove">
                    <a href="profile-settings.html">Profile Settings</a>
                  </li>
                  <li className="hove">
                    <a href="change-password.html">Change Password</a>
                  </li>
                </ul>
              </li>

              <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                  Pages <i className="fas fa-chevron-down"></i>
                </a>
                <ul className="dropdown-menu ">
                  <li className="hove">
                    <a href="voice-call.html">Voice Call</a>
                  </li>
                  <li className="hove">
                    <a href="video-call.html">Video Call</a>
                  </li>
                  <li className="hove">
                    <a href="search.html">Search Doctors</a>
                  </li>
                  <li className="hove">
                    <Link href="/calender">
                      <a href="#">Calendar</a>
                    </Link>
                  </li>

                  <li className="hove">
                    <a href="components.html">Components</a>
                  </li>
                  <li className="dropdown hove">
                    <a
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      href="#"
                    >
                      Invoices <i className="fas fa-chevron-right"></i>
                    </a>
                    <ul className="dropdown-menu ">
                      <li className="hove">
                        <Link href="/invoices">
                          <a href="#">Invoices</a>
                        </Link>
                      </li>

                      <li className="hove">
                        <Link href="/invoiceView">
                          <a href="#">Invoice View</a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="hove">
                    <a href="blank-page.html">Starter Page</a>
                  </li>
                  <li className="hove">
                    <a href="login.html">Login</a>
                  </li>
                  <li className="hove">
                    <a href="register.html">Register</a>
                  </li>
                  <li className="hove">
                    <a href="forgot-password.html">Forgot Password</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown ">
                <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                  Blog <i className="fas fa-chevron-down"></i>
                </a>
                <ul className="dropdown-menu ">
                  <li className="hove">
                    <a href="#">Blog List</a>
                  </li>
                  <li className="hove">
                    <a href="#">Blog Grid</a>
                  </li>
                  <li className="hove">
                    <a href="#">Schedule Timing</a>
                  </li>
                  <li className="hove">
                    <a href="#">Patient List</a>
                  </li>
                  <li className="hove">
                    <a href="#">Patients Profile</a>
                  </li>
                  <li className="hove">
                    <a href="#">Chat</a>
                  </li>
                  <li className="hove">
                    <a href="#">Invoices</a>
                  </li>
                  <li className="hove">
                    <a href="#">Profile Setting</a>
                  </li>
                  <li className="hove">
                    <a href="#">Reviews</a>
                  </li>
                  <li className="hove">
                    <Link href="/registration">
                      <a href="#">Doctor Register</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Admin</a>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right flex-D log">
              <li className="nav-item contact-item">
                <div className="header-contact-img">
                  <i className="far fa-hospital"></i>
                </div>
                <div className="header-contact-detail">
                  <p className="contact-header">Contact</p>
                  <p className="contact-info-header"> +1 315 369 5943</p>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link header-login" href="login.html">
                  login / Signup
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
