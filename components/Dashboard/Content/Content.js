import { useState } from "react";
import Dashcard from "./Dashcard";
import Side from "../../Combine/DrSidebar/index";
import { useSelector } from "react-redux";

const Content = () => {
  const dashboard = useSelector((state) => state.dashboard.data);

 

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

                              {!!dashboard &&
                               dashboard.map((item, key) => (
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
