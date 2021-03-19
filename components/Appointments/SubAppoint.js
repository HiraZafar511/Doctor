const Sub = ({ item }) => {
  return (
    <div class="appointments">
      <div class="appointment-list">
        <div class="profile-info-widget">
          <a href="patient-profile.html" class="booking-doc-img">
            <img src={`/images/${item.img}`} alt="User Image" />
          </a>
          <div class="profile-det-info">
            <h3>
              <a href="patient-profile.html" className="name">
                {item.name}
              </a>
            </h3>
            <div class="patient-details">
              <h5>
                <i class="far fa-clock"></i> {item.detail}
              </h5>
              <h5>
                <i class="fas fa-map-marker-alt"></i> {item.state}
              </h5>
              <h5>
                <i class="fas fa-envelope"></i> {item.email}
              </h5>
              <h5 class="mb-0">
                <i class="fas fa-phone"></i> {item.num}
              </h5>
            </div>
          </div>
        </div>
        <div class="appointment-action">
          <a
            href="#"
            class="btn btn-sm bg-info-light"
            data-toggle="modal"
            data-target="#appt_details"
          >
            <i class="far fa-eye"></i> View
          </a>
          <a href="javascript:void(0);" class="btn btn-sm bg-success-light">
            <i class="fas fa-check"></i> Accept
          </a>
          <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
            <i class="fas fa-times"></i> Cancel
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sub;
