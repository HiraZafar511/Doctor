import Side from "../Sidebar/Side";
import { Tabs } from "antd";
import Slot from "./AddSlot";

const { TabPane } = Tabs;

const Tab = () => (
  <Tabs defaultActiveKey="1">
    <TabPane tab="Tab 1" key="1">
      <div className="slot">
        <div>
          <h4 class="card-title d-flex justify-content-between">
            <span>Time Slots</span>
          </h4>
          <p class="text-muted mb-0">Not Available</p>
        </div>
        <div>
          <Slot />
        </div>
      </div>
    </TabPane>
    <TabPane tab="Tab 2" key="2">
      <div className="slot">
        <div>
          <h4 class="card-title d-flex justify-content-between">
            <span>Time Slots</span>
          </h4>
          <p class="text-muted mb-0">Not Available</p>
        </div>
        <div>
          <Slot />
        </div>
      </div>
    </TabPane>
    <TabPane tab="Tab 3" key="3">
      <div className="slot">
        <div>
          <h4 class="card-title d-flex justify-content-between">
            <span>Time Slots</span>
          </h4>
          <p class="text-muted mb-0">Not Available</p>
        </div>
        <div>
          <Slot />
        </div>
      </div>
    </TabPane>
    <TabPane tab="Tab 4" key="4">
      <div className="slot">
        <div>
          <h4 class="card-title d-flex justify-content-between">
            <span>Time Slots</span>
          </h4>
          <p class="text-muted mb-0">Not Available</p>
        </div>
        <div>
          <Slot />
        </div>
      </div>
    </TabPane>
    <TabPane tab="Tab 5" key="5">
      <div className="slot">
        <div>
          <h4 class="card-title d-flex justify-content-between">
            <span>Time Slots</span>
          </h4>
          <p class="text-muted mb-0">Not Available</p>
        </div>
        <div>
          <Slot />
        </div>
      </div>
    </TabPane>
    <TabPane tab="Tab 6" key="6">
      <div className="slot">
        <div>
          <h4 class="card-title d-flex justify-content-between">
            <span>Time Slots</span>
          </h4>
          <p class="text-muted mb-0">Not Available</p>
        </div>
        <div>
          <Slot />
        </div>
      </div>
    </TabPane>
    <TabPane tab="Tab 7" key="7">
      <div className="slot">
        <div>
          <h4 class="card-title d-flex justify-content-between">
            <span>Time Slots</span>
          </h4>
          <p class="text-muted mb-0">Not Available</p>
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
          <div class="col-md-7 col-lg-8 col-xl-9">
            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-body">
                    <h4 class="card-title">Schedule Timings</h4>
                    <div class="row">
                      <div class="col-lg-4">
                        <div class="form-group">
                          <label>Timing Slot Duration</label>
                          <select class="select form-control">
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
