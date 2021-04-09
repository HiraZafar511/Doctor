import Side from "../../Combine/DrSidebar/index";
import { useSelector } from "react-redux";
import List from "./List";

const PatientInfo = () => {
  const list = useSelector((state) => state.patientList.data);

  return (
    <div className="patient-list">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
            <Side />
          </div>
          <div className="col-md-7 col-lg-8 col-xl-9">
            <div class="row row-grid">
              {!!list && list.map((item, key) => 
              <div class="col-md-6 col-lg-4 col-xl-4">
              <List item={item} /> </div>
              )}
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientInfo;
