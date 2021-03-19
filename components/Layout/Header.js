import Link from "next/link";
const Header = () => {
  return (
    <div className="header">
      <nav class="navbar ">
        <div class="container-fluid wrap">
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">
              <img src="/images/logo.png" />
            </a>
          </div>
          <div class="collapse navbar-collapse pad" id="myNavbar">
            <ul class="nav navbar-nav flex-D">
              <li class="active">
                <Link href="/">
                  <a href="#">Home</a>
                </Link>
              </li>
              <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                  Doctors <i class="fas fa-chevron-down"></i>
                </a>

                <ul class="dropdown-menu ">
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
                    <a href="#">Doctor Register</a>
                  </li>
                </ul>
              </li>
              <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                  Patients <i class="fas fa-chevron-down"></i>
                </a>
                <ul class="dropdown-menu ">
                  <li class="dropdown hove">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                      Doctors <i class="fas fa-chevron-right"></i>
                    </a>
                    <ul class="dropdown-menu ">
                      <li className="hove">
                        <a href="#">Map Grip</a>
                      </li>
                      <li className="hove">
                        <a href="#">Map List</a>
                      </li>
                    </ul>
                  </li>
                  <li className="hove">
                    <a href="search.html">Search Doctor</a>
                  </li>
                  <li className="hove">
                    <a href="doctor-profile.html">Doctor Profile</a>
                  </li>
                  <li className="hove">
                    <a href="booking.html">Booking</a>
                  </li>
                  <li className="hove">
                    <a href="checkout.html">Checkout</a>
                  </li>
                  <li className="hove">
                    <a href="booking-success.html">Booking Success</a>
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

              <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                  Pages <i class="fas fa-chevron-down"></i>
                </a>
                <ul class="dropdown-menu ">
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
                    <a href="calendar.html">Calendar</a>
                  </li>
                  <li className="hove">
                    <a href="components.html">Components</a>
                  </li>
                  <li class="dropdown hove">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                      Invoices <i class="fas fa-chevron-right"></i>
                    </a>
                    <ul class="dropdown-menu ">
                      <li className="hove">
                        <a href="#">Invoices</a>
                      </li>
                      <li className="hove">
                        <a href="#">Invoice View</a>
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
              <li class="dropdown ">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                  Blog <i class="fas fa-chevron-down"></i>
                </a>
                <ul class="dropdown-menu ">
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
                    <a href="#">Doctor Register</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Admin</a>
              </li>
            </ul>
            <ul class="nav navbar-nav navbar-right flex-D log">
              <li class="nav-item contact-item">
                <div class="header-contact-img">
                  <i class="far fa-hospital"></i>
                </div>
                <div class="header-contact-detail">
                  <p class="contact-header">Contact</p>
                  <p class="contact-info-header"> +1 315 369 5943</p>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link header-login" href="login.html">
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
