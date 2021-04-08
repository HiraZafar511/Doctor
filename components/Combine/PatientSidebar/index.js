import { useState } from "react";
import Link from "next/link"; 
const Side = () => {
  const [con, setCon] = useState([
    {
      active: "active",
      icon: "fa-columns",
      title: "Dashboard",
      page: "dashboard",
    },
   
    
   
    {
      icon: "fa-bookmark",
      title: "Favourites",
      page: "favourites",
    },
    
    {
      icon: "fa-user-cog",
      title: "Profile Settings",
      page: "PatientProfileSetting",
    },
  
    {
      icon: "fa-lock",
      title: "Change Password",
      page: "changePassword",
    },
    ,
    {
      icon: "fa-sign-out-alt",
      title: "Logout",
      page: "/",
    },
  ]);

  return (
    <div className="theiaStickySidebar">
      <div className="profile-sidebar">
        <div className="widget-profile pro-widget-content">
          <div className="profile-info-widget">
            <a href="#" className="booking-doc-img">
              <img src="/images/patient.jpg" alt="User Image" />
            </a>
            <div className="profile-det-info">
              <h3>George Anderson</h3>

              <div className="patient-details">
              <h5><i class="fas fa-birthday-cake"></i> 24 Jul 1983, 38 years</h5>
              <h5 class="mb-0"><i class="fas fa-map-marker-alt"></i> Newyork, USA</h5>
              </div>
            </div>
          </div>
        </div>

        {con.map((item, key) => (
           <div className="dashboard-widget">
           <nav className="dashboard-menu">
             <ul>
               <li className={item.active}>
                 <Link href={`${item.page}`}>
                   <a href="#">
                     <i className={`fas ${item.icon}`}></i>
                     <span>{item.title}</span>
                   </a>
                 </Link>
               </li>
             </ul>
           </nav>
         </div>
        ))}
      </div>
     
    </div>
  );
};

export default Side;
