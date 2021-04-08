import ProSetting from "../Combine/PatientSidebar/index";
import MapgridList from "../Map/MapItems.js/MapgridList";
import { useSelector } from "react-redux";

const List = () => {
    const map = useSelector((state) => state.mapGrid.data);
  return (
    <div className="profile">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
            <ProSetting />
          </div>
          <div className="col-md-7 col-lg-8 col-xl-9">
            <div className="card">
              <div className="card-body">
                {map.map((item, key) => (
                  <div className="col-md-4 mapgrid">
                    <MapgridList item={item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
