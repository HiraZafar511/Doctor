import Overview from "./TabsOption/Overview";

import { Tabs } from 'antd';
import Locations from "./TabsOption/Locations";
import Reviews from "./TabsOption/Reviews";
import Business from "./TabsOption/BusinessHours";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const Demo = () => (
  <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="Overview" key="1">
     <Overview/>
    </TabPane>
    <TabPane tab="Locations" key="2">
     <Locations/>
    </TabPane>
    <TabPane tab="Reviews" key="3">
    <Reviews/>
    </TabPane>
    <TabPane tab="Business Hours" key="4">
    <Business/>
    </TabPane>
  </Tabs>
);

export default Demo;