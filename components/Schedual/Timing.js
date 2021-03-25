import Side from "../Combine/Sidebar/Side";
import { Tabs } from "antd";
import Slot from "./AddSlot";

const { TabPane } = Tabs;

const Tab = () => (
  <Tabs defaultActiveKey="1">
    <TabPane tab="Sunday" key="1">
      <div className="slot">
        <div>
          <h4 className="card-title d-flex justify-content-between">
            <span>Time Slots</span>
          </h4>
          <p className="text-muted mb-0">Not Available</p>
        </div>
        <div>
          <Slot />
        </div>
      </div>
    </TabPane>
    <TabPane tab="Monday" key="2">
      <div className="slot">
        <div>
          <h4 className="card-title d-flex justify-content-between">
            <span>Time Slots</span>
          </h4>
          <p className="text-muted mb-0">Not Available</p>
        </div>
        <div>
          <Slot />
        </div>
      </div>
    </TabPane>
    <TabPane tab="Tuesday" key="3">
      <div className="slot">
        <div>
          <h4 className="card-title d-flex justify-content-between">
            <span>Time Slots</span>
          </h4>
          <p className="text-muted mb-0">Not Available</p>
        </div>
        <div>
          <Slot />
        </div>
      </div>
    </TabPane>
    <TabPane tab="Wednesday" key="4">
      <div className="slot">
        <div>
          <h4 className="card-title d-flex justify-content-between">
            <span>Time Slots</span>
          </h4>
          <p className="text-muted mb-0">Not Available</p>
        </div>
        <div>
          <Slot />
        </div>
      </div>
    </TabPane>
    <TabPane tab="Thursday" key="5">
      <div className="slot">
        <div>
          <h4 className="card-title d-flex justify-content-between">
            <span>Time Slots</span>
          </h4>
          <p className="text-muted mb-0">Not Available</p>
        </div>
        <div>
          <Slot />
        </div>
      </div>
    </TabPane>
    <TabPane tab="Friday" key="6">
      <div className="slot">
        <div>
          <h4 className="card-title d-flex justify-content-between">
            <span>Time Slots</span>
          </h4>
          <p className="text-muted mb-0">Not Available</p>
        </div>
        <div>
          <Slot />
        </div>
      </div>
    </TabPane>
    <TabPane tab="Saturday" key="7">
      <div className="slot">
        <div>
          <h4 className="card-title d-flex justify-content-between">
            <span>Time Slots</span>
          </h4>
          <p className="text-muted mb-0">Not Available</p>
        </div>
        <div>
          <Slot />
        </div>
      </div>
    </TabPane>
  </Tabs>
);

const Time = () => {
  return (
    <div className="time">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
            <Side />
          </div>
          <div className="col-md-7 col-lg-8 col-xl-9">
            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Schedule Timings</h4>
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="form-group">
                          <label>Timing Slot Duration</label>
                          <select className="select form-control">
                            <option>Select</option>
                            <option>15 mins</option>
                            <option>30 mins</option>
                            <option>45 mins</option>
                            <option>1 Hour</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <Tab />
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

export default Time;
