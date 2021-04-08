import Side from "../Combine/PatientSidebar/index";
import Tab from "../PatientProfile/Tabs"

const index = () => {
    return ( <div className="container-fluid">
        <div className="row">
            <div className="col-md-5 col-lg-4 col-xl-3">
                <Side/>
            </div>
            <div className="col-md-7 col-lg-8 col-xl-9">
                <div className="card">
                    <div className="card-body">
                    <Tab/>
                    </div>
                </div>
               
            </div>
        </div>
    </div> );
}
 
export default index;