import Link from "next/link";
import { useState } from "react";
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
                  <a href="#" className=""
                 
                 >
                    Home
                  </a>
                </Link>
              </li>
              <li className="dropdown " >
                <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                  Doctors <i className="fas fa-chevron-down"></i>
                </a>

                <ul className="dropdown-menu ">
                  <li className="hove bbtm " >
                    <Link href="/dashboard">
                      <a href="#" className="listPad">
                        Doctor Dashboard
                      </a>
                    </Link>
                  </li>
                  <li className="hove bbtm">
                    <Link href="/appointments">
                      <a href="#" className="listPad">
                        Appointments
                      </a>
                    </Link>
                  </li>
                  <li className="hove bbtm">
                    <Link href="/schedual">
                      <a href="#" className="listPad">
                        Schedule Timing
                      </a>
                    </Link>
                  </li>
                  <li className="hove bbtm">
                    <Link href="/patientList">
                      <a href="#" className="listPad">
                        Patient List
                      </a>
                    </Link>
                  </li>
                  <li className="hove bbtm">
                    <Link href="/patientProfile">
                      <a href="#" className="listPad">
                        Patient Profile
                      </a>
                    </Link>
                  </li>
                  <li className="hove bbtm">
                    <Link href="/booking">
                      <a href="#" className="listPad">
                        Booking
                      </a>
                    </Link>
                  </li>
                  <li className="hove bbtm">
                    <Link href="/profileSetting">
                      <a href="#" className="listPad">
                        Profile Setting
                      </a>
                    </Link>
                  </li>
                  <li className="hove bbtm">
                    <Link href="/review">
                      <a href="#" className="listPad">
                        Reviews
                      </a>
                    </Link>
                  </li>
                  <li className="hove bbtm">
                    <Link href="/invoices">
                      <a href="#" className="listPad">
                        Invoices
                      </a>
                    </Link>
                  </li>
                  <li className="hove bbtm">
                    <Link href="/registration">
                      <a href="#" className="listPad">
                        Doctor Register
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                  Patients <i className="fas fa-chevron-down"></i>
                </a>
                <ul className="dropdown-menu ">
                  <li className="dropdown hove bbtm">
                    <a
                      className="dropdown-toggle listPad"
                      data-toggle="dropdown"
                      href="#"
                    >
                      Doctors <i className="fas fa-chevron-right"></i>
                    </a>
                    <ul className="dropdown-menu ">
                      <li className="hove bbtm">
                        <Link href="/mapGrid">
                          <a href="#" className="listPad">
                            Map Grip
                          </a>
                        </Link>
                      </li>
                      <li className="hove bbtm">
                        <Link href="/mapList">
                          <a href="#" className="listPad">
                            Map List
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="hove bbtm">
                    <Link href="/search-doctor">
                      <a href="#" className="listPad">
                        Search Doctor
                      </a>
                    </Link>
                  </li>
                  <li className="hove bbtm">
                    <Link href="/doctorProfile">
                      <a href="#" className="listPad">
                        Doctor Profile
                      </a>
                    </Link>
                  </li>

                  <li className="hove bbtm">
                    <Link href="/checkout">
                      <a href="#" className="listPad">
                        Checkout
                      </a>
                    </Link>
                  </li>
                  <li className="hove bbtm">
                    <Link href="/bookingSuccess">
                      <a href="#" className="listPad">
                        Booking Success
                      </a>
                    </Link>
                  </li>
                  <li className="hove bbtm">
                    <Link href="/patientDashboard">
                      <a href="#" className="listPad">
                        Patient Dashboard
                      </a>
                    </Link>
                  </li>
                  <li className="hove bbtm">
                    <Link href="/favourites">
                      <a href="#" className="listPad">
                        Favourites
                      </a>
                    </Link>
                  </li>

                  <li className="hove bbtm">
                    <Link href="/PatientProfileSetting">
                      <a href="#" className="listPad">
                        Profile Setting
                      </a>
                    </Link>
                  </li>
                  <li className="hove bbtm">
                    <Link href="/changePassword">
                      <a href="#" className="listPad">
                        Change Password
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                  Pages <i className="fas fa-chevron-down"></i>
                </a>
                <ul className="dropdown-menu ">
                  <li className="hove bbtm">
                    <Link href="/search-doctor">
                      <a href="#" className="listPad">
                        Search Doctor
                      </a>
                    </Link>
                  </li>
                  <li className="hove bbtm">
                    <Link href="/calender">
                      <a href="#" className="listPad">
                        Calendar
                      </a>
                    </Link>
                  </li>

                  <li className="dropdown hove bbtm">
                    <a
                      className="dropdown-toggle listPad"
                      data-toggle="dropdown"
                      href="#"
                    >
                      Invoices <i className="fas fa-chevron-right"></i>
                    </a>
                    <ul className="dropdown-menu ">
                      <li className="hove bbtm">
                        <Link href="/invoices">
                          <a href="#" className="listPad">
                            Invoices
                          </a>
                        </Link>
                      </li>

                      <li className="hove bbtm">
                        <Link href="/invoiceView">
                          <a href="#" className="listPad">
                            Invoice View
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="hove bbtm">
                    <Link href="/login">
                      <a href="#" className="listPad">
                        Login
                      </a>
                    </Link>
                  </li>
                  <li className="hove bbtm">
                    <Link href="/patientRegistration">
                      <a href="#" className="listPad">
                        Register
                      </a>
                    </Link>
                  </li>
                  <li className="hove bbtm">
                    <Link href="/forgotPassword">
                      <a href="#" className="listPad">
                        Forgot Password
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="dropdown ">
                <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                  Blog <i className="fas fa-chevron-down"></i>
                </a>
                <ul className="dropdown-menu ">
                  <li className="hove bbtm">
                    <Link href="/blogList">
                      <a href="#" className="listPad">
                        Blog List
                      </a>
                    </Link>
                  </li>
                  <li className="hove bbtm">
                    <Link href="/blogGrid">
                      <a href="#" className="listPad">
                        Blog Grid
                      </a>
                    </Link>
                  </li>
                  <li className="hove bbtm">
                    <Link href="/blogDetail">
                      <a href="#" className="listPad">
                        Blog Detail
                      </a>
                    </Link>
                  </li>

                  <li className="hove bbtm">
                    <Link href="/registration">
                      <a href="#" className="listPad">
                        Doctor Register
                      </a>
                    </Link>
                  </li>
                </ul>
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
                <Link href="/login">
                  <a className="nav-link header-login">login / Signup</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
