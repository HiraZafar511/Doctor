import { useState } from "react";
import Sidebar from "./Sidebar";
const Side = () => {
  const [con, setCon] = useState([
    {
      active: "active",
      icon: "fa-columns",
      title: "Dashboard",
      page: "dashboard",
    },
    {
      icon: "fa-calendar-check",
      title: "Appointments",
      page: "appointments",
    },
    {
      icon: "fa-user-injured",
      title: "My Patients",
      page: "patients",
    },
    {
      icon: "fa-hourglass-start",
      title: "Schedule Timings",
      page: "schedual",
    },
    {
      icon: "fa-file-invoice",
      title: "Booking",
      page: "booking",
    },
    {
      icon: "fa-star",
      title: "Reviews",
      page: "reviews",
    },
    {
      icon: "fa-comments",
      title: "Message",
      page: "messages",
    },
    {
      icon: "fa-user-cog",
      title: "Profile Settings",
      page: "profile",
    },
    {
      icon: "fa-share-alt",
      title: "Social Media",
      page: "socialmedia",
    },
    ,
    {
      icon: "fa-lock",
      title: "Change Password",
      page: "password",
    },
    ,
    {
      icon: "fa-sign-out-alt",
      title: "Logout",
      page: "logout",
    },
  ]);

  return (
    <div className="theiaStickySidebar">
      <div className="profile-sidebar">
        <div className="widget-profile pro-widget-content">
          <div className="profile-info-widget">
            <a href="#" className="booking-doc-img">
              <img src="/images/doctor-thumb-02.jpg" alt="User Image" />
            </a>
            <div className="profile-det-info">
              <h3>Dr. Fred Ortego</h3>

              <div className="patient-details">
                <h5 className="mb-0">
                  BDS, MDS - Oral &amp; Maxillofacial Surgery
                </h5>
              </div>
            </div>
          </div>
        </div>

        {con.map((item, key) => (
          <Sidebar item={item} />
        ))}
      
     
        
      </div>
    </div>
  );
};

export default Side;
