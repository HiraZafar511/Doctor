import { useState } from "react";
import Dashcard from "./Dashcard";
import Side from "../../Sidebar/Side";

const Content = () => {
  const [card, setCard] = useState([
    {
      img: "patient.jpg",
      name: "George Anderson",
      id: "#PT0016",
      date: "11 Nov 2019",
      time: "10.00 AM",
      purpose: "General",
      type: "New Patient",
      pay: "$150",
    },
    {
      img: "patient1.jpg",
      name: "Megan Bird",
      id: "#PT0001",
      date: "3 Nov 2019 ",
      time: "11.00 AM",
      purpose: "General",
      type: "Old Patient",
      pay: "$200",
    },
    {
      img: "patient2.jpg",
      name: "Alvin Boykin",
      id: "#PT0002",
      date: "1 Nov 2019",
      time: "1.00 PM",
      purpose: "General",
      type: "New Patient",
      pay: "$75",
    },
    {
      img: "patient3.jpg",
      name: "Nicholas Hicks",
      id: "#PT0003",
      date: "30 Oct 2019 ",
      time: "9.00 AM",
      purpose: "General",
      type: "Old Patient",
      pay: "$100",
    },
    {
      img: "patient4.jpg",
      name: "Nicholas Hicks",
      id: "#PT0003",
      date: "30 Oct 2019 ",
      time: "9.00 AM",
      purpose: "General",
      type: "Old Patient",
      pay: "$100",
    },
    {
      img: "patient5.jpg",
      name: "Nicholas Hicks",
      id: "#PT0003",
      date: "30 Oct 2019 ",
      time: "9.00 AM",
      purpose: "General",
      type: "Old Patient",
      pay: "$100",
    },
  ]);
  return (
    <div className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
            <Side />
          </div>
          <div class="col-md-7 col-lg-8 col-xl-9">
            <div class="row">
              <div class="col-md-12">
                <div class="card dash-card">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-12 col-lg-4 bts">
                        <div class="dash-widget dct-border-rht">
                          <div class="circle-bar circle-bar1">
                            <div class="circle-graph1" data-percent="75">
                              <div class="progress blue">
                                <span class="progress-left">
                                  <span class="progress-bar"></span>
                                </span>
                                <span class="progress-right">
                                  <span class="progress-bar"></span>
                                </span>
                                <img
                                  src="/images/icon-01.png"
                                  class="img-fluid"
                                  alt="patient"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="dash-widget-info">
                            <h6>Total Patient</h6>
                            <h3>1500</h3>
                            <p class="text-muted">Till Today</p>
                          </div>
                        </div>
                      </div>

                      <div class="col-md-12 col-lg-4 bts">
                        <div class="dash-widget dct-border-rht">
                          <div class="circle-bar circle-bar2">
                            <div class="circle-graph2" data-percent="65">
                              <div class="progress blue">
                                <span class="progress-left">
                                  <span class="progress-bar"></span>
                                </span>
                                <span class="progress-right">
                                  <span class="progress-bar"></span>
                                </span>
                                <img
                                  src="/images/icon-02.png"
                                  class="img-fluid"
                                  alt="Patient"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="dash-widget-info">
                            <h6>Today Patient</h6>
                            <h3>160</h3>
                            <p class="text-muted">06, Nov 2019</p>
                          </div>
                        </div>
                      </div>

                      <div class="col-md-12 col-lg-4 bts">
                        <div class="dash-widget dct-flex">
                          <div class="circle-bar circle-bar3">
                            <div class="circle-graph3" data-percent="50">
                              <div class="progress blue">
                                <span class="progress-left">
                                  <span class="progress-bar"></span>
                                </span>
                                <span class="progress-right">
                                  <span class="progress-bar"></span>
                                </span>
                                <img
                                  src="/images/icon-03.png"
                                  class="img-fluid"
                                  alt="Patient"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="dash-widget-info">
                            <h6>Appoinments</h6>
                            <h3>85</h3>
                            <p class="text-muted">06, Apr 2019</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row fnt">
              <div class="col-md-12">
                <h4 class=" vb">Patient Appoinment</h4>
                <div class="appointment-tab">
                  <ul class="nav nav-tabs nav-tabs-solid nav-tabs-rounded">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        href="#upcoming-appointments"
                        data-toggle="tab"
                      >
                        Upcoming
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="#today-appointments"
                        data-toggle="tab"
                      >
                        Today
                      </a>
                    </li>
                  </ul>
                  <div class="tab-content">
                    <div
                      class="tab-pane show active"
                      id="upcoming-appointments"
                    >
                      <div class="card card-table mb-0">
                        <div class="card-body">
                          <div class="table-responsive">
                            <table class="table table-hover table-center mb-0">
                              <thead>
                                <tr>
                                  <th>Patient Name</th>
                                  <th>Appt Date</th>
                                  <th>Purpose</th>
                                  <th>Type</th>
                                  <th class="text-center">Paid Amount</th>
                                  <th></th>
                                </tr>
                              </thead>

                              {card.map((item, key) => (
                                <tr>
                                  <Dashcard item={item} />
                                </tr>
                              ))}
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
