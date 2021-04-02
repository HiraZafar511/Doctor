const List = ({item}) => {
    return (   <div class="card widget-profile pat-widget-profile">
    <div class="card-body">
      <div class="pro-widget-content">
        <div class="profile-info-widget">
          <a href="patient-profile.html" class="booking-doc-img">
            <img src={`/images/${item.img}`} alt="User Image" />
          </a>
          <div class="profile-det-info">
            <h3>
              <a href="patient-profile.html">{item.name}</a>
            </h3>
            <div class="patient-details">
              <h5>
                <b>Patient ID :</b> {item.id}
              </h5>
              <h5 class="mb-0">
                <i class="fas fa-map-marker-alt"></i> {item.loc}
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div class="patient-info">
        <ul>
          <li>
            Phone <span>{item.num}</span>
          </li>
          <li>
            Age <span>{item.age}</span>
          </li>
          <li>
            Blood Group <span>{item.blood}</span>
          </li>
        </ul>
      </div>
    </div>
  </div> );
}
 
export default List;