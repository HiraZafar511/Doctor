import { useState } from "react";
import Dashcard from "./Dashcard";
import Side from "../../Combine/Sidebar/Side";

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
          <div className="col-md-7 col-lg-8 col-xl-9">
            <div className="row">
              <div className="col-md-12">
                <div className="card dash-card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-12 col-lg-4 bts">
                        <div className="dash-widget dct-border-rht">
                          <div className="circle-bar circle-bar1">
                            <div className="circle-graph1" data-percent="75">
                              <div className="progress blue">
                                <span className="progress-left">
                                  <span className="progress-bar"></span>
                                </span>
                                <span className="progress-right">
                                  <span className="progress-bar"></span>
                                </span>
                                <img
                                  src="/images/icon-01.png"
                                  className="img-fluid"
                                  alt="patient"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="dash-widget-info">
                            <h6>Total Patient</h6>
                            <h3>1500</h3>
                            <p className="text-muted">Till Today</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-12 col-lg-4 bts">
                        <div className="dash-widget dct-border-rht">
                          <div className="circle-bar circle-bar2">
                            <div className="circle-graph2" data-percent="65">
                              <div className="progress blue">
                                <span className="progress-left">
                                  <span className="progress-bar"></span>
                                </span>
                                <span className="progress-right">
                                  <span className="progress-bar"></span>
                                </span>
                                <img
                                  src="/images/icon-02.png"
                                  className="img-fluid"
                                  alt="Patient"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="dash-widget-info">
                            <h6>Today Patient</h6>
                            <h3>160</h3>
                            <p className="text-muted">06, Nov 2019</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-12 col-lg-4 bts">
                        <div className="dash-widget dct-flex">
                          <div className="circle-bar circle-bar3">
                            <div className="circle-graph3" data-percent="50">
                              <div className="progress blue">
                                <span className="progress-left">
                                  <span className="progress-bar"></span>
                                </span>
                                <span className="progress-right">
                                  <span className="progress-bar"></span>
                                </span>
                                <img
                                  src="/images/icon-03.png"
                                  className="img-fluid"
                                  alt="Patient"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="dash-widget-info">
                            <h6>Appoinments</h6>
                            <h3>85</h3>
                            <p className="text-muted">06, Apr 2019</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row fnt">
              <div className="col-md-12">
                <h4 className=" vb">Patient Appoinment</h4>
                <div className="appointment-tab">
                  <ul className="nav nav-tabs nav-tabs-solid nav-tabs-rounded">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        href="#upcoming-appointments"
                        data-toggle="tab"
                      >
                        Upcoming
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="#today-appointments"
                        data-toggle="tab"
                      >
                        Today
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div
                      className="tab-pane show active"
                      id="upcoming-appointments"
                    >
                      <div className="card card-table mb-0">
                        <div className="card-body">
                          <div className="table-responsive">
                            <table className="table table-hover table-center mb-0">
                              <thead>
                                <tr>
                                  <th>Patient Name</th>
                                  <th>Appt Date</th>
                                  <th>Purpose</th>
                                  <th>Type</th>
                                  <th className="text-center">Paid Amount</th>
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
