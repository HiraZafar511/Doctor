import { Tabs } from 'antd';
import Appointment from "./Tabs/Appointment"
import Prescription from './Tabs/Prescription';
import Billing from "./Tabs/Billing";
import MedicalRecord from './Tabs/MedicalRecords';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const Demo = () => (
  <Tabs defaultActiveKey="1" onChange={callback} className="patient-appoint">
    <TabPane tab="Appointments" key="1">
     <Appointment/>
    </TabPane>
    <TabPane tab="Prescription" key="2">
     <Prescription/>
    </TabPane>
    <TabPane tab="Medical Records" key="3">
     <MedicalRecord/>
    </TabPane>
    <TabPane tab="Billing" key="4">
     <Billing/>
    </TabPane>
  </Tabs>
);

export default Demo;