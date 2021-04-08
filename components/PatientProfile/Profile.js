import { useState } from "react";
import List from "../PatientList/Patients.js/List";
import Tabs from "./Tabs";

const Profile = () => {
  const [data] = useState([
    {
      img: "patient.jpg",
      name: "George Anderson",
      id: "P0016",
      loc: "Alabama, USA",
      num: "+1 952 001 8563",
      age: "38 Years, Male",
      blood: "AB+",
    },
  ]);

  return (
    <div className="patient-list">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
            {data.map((item, key) => (
              <List item={item} />
            ))}
         
          <div class="card">
            <div class="card-header">
              <h4 class="card-title">Last Booking</h4>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <div class="media align-items-center">
                  <div class="mr-3">
                    <img
                      alt="Image placeholder"
                      src="/images/doctor-thumb-02.jpg"
                      class="avatar  rounded-circle"
                    />
                  </div>
                  <div class="media-body">
                    <h5 class="d-block mb-0">Dr. Fred Ortego </h5>
                    <span class="d-block text-sm text-muted">
                      Cardiologists
                    </span>
                    <span class="d-block text-sm text-muted">
                      14 Nov 2019 5.00 PM
                    </span>
                  </div>
                </div>
              </li>
              <li class="list-group-item">
                <div class="media align-items-center">
                  <div class="mr-3">
                    <img
                      alt="Image placeholder"
                      src="/images/doctor-thumb-02.jpg"
                      class="avatar  rounded-circle"
                    />
                  </div>
                  <div class="media-body">
                    <h5 class="d-block mb-0">Dr. Fred Ortego </h5>
                    <span class="d-block text-sm text-muted">
                      Cardiologists
                    </span>
                    <span class="d-block text-sm text-muted">
                      12 Nov 2019 11.00 AM
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div> </div>
          <div className="col-md-7 col-lg-8 col-xl-9">
            <div className="card">
              <div className="card-body">
                <Tabs />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
