const Sub = ({ item }) => {
  return (
    <div className="appointments">
      <div className="appointment-list">
        <div className="profile-info-widget">
          <a href="patient-profile.html" className="booking-doc-img">
            <img src={`/images/${item.img}`} alt="User Image" />
          </a>
          <div className="profile-det-info">
            <h3>
              <a href="patient-profile.html" className="name">
                {item.name}
              </a>
            </h3>
            <div className="patient-details">
              <h5>
                <i className="far fa-clock"></i> {item.detail}
              </h5>
              <h5>
                <i className="fas fa-map-marker-alt"></i> {item.state}
              </h5>
              <h5>
                <i className="fas fa-envelope"></i> {item.email}
              </h5>
              <h5 className="mb-0">
                <i className="fas fa-phone"></i> {item.num}
              </h5>
            </div>
          </div>
        </div>
        <div className="appointment-action">
          <a
            href="#"
            className="btn btn-sm bg-info-light"
            data-toggle="modal"
            data-target="#appt_details"
          >
            <i className="far fa-eye"></i> View
          </a>
          <a href="javascript:void(0);" className="btn btn-sm bg-success-light">
            <i className="fas fa-check"></i> Accept
          </a>
          <a href="javascript:void(0);" className="btn btn-sm bg-danger-light">
            <i className="fas fa-times"></i> Cancel
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sub;
