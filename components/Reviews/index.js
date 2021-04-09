import Review from "../DoctorProfile/TabsOption/Reviews";
import Side from "../Combine/DrSidebar/index";
const Reviews = () => {
  return (
    <div className="container-fluid">
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
              <Side />
            </div>
            <div className="col-md-7 col-lg-8 col-xl-9">
              <div className="card dash-card">
                <div className="card-body">
                  <div className="row">
                    <Review />
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

export default Reviews;
