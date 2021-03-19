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
      page: "timing",
    },
    {
      icon: "fa-file-invoice",
      title: "Invoices",
      page: "invoices",
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
    <div class="theiaStickySidebar">
      <div class="profile-sidebar">
        <div class="widget-profile pro-widget-content">
          <div class="profile-info-widget">
            <a href="#" class="booking-doc-img">
              <img src="/images/doctor-thumb-02.jpg" alt="User Image" />
            </a>
            <div class="profile-det-info">
              <h3>Dr. Fred Ortego</h3>

              <div class="patient-details">
                <h5 class="mb-0">
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
      <div
        class="resize-sensor"
        style={{
          position: "absolute",
          inset: 0,
          overflow: " hidden",
          visibility: " hidden",
        }}
      >
        <div
          class="resize-sensor-expand"
          style={{
            position: "absolute",
            left: "0",
            top: 0,
            right: 0,
            bottom: 0,
            overflow: "hidden",
            visibility: "hidden",
          }}
        >
          <div
            style={{
              position: " absolute",
              left: 0,
              top: 0,
              width: 310,
              height: 834,
            }}
          ></div>
        </div>
        <div
          class="resize-sensor-shrink"
          style={{
            position: " absolute",
            left: "0",
            top: 0,
            right: 0,
            bottom: 0,
            overflow: "hidden",
            visibility: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "200%",
              height: "200%",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Side;
