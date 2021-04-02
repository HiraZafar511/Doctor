const Detail = ({item}) => {
    return (  <div className="card">
    <div className="card-body">
      <div class="doctor-widget d-flex">
        <div class="doc-info-left d-flex">
          <div class="doctor-img">
            <a href="#">
              <img
                src={`/images/${item.img}`}
                class="img-fluid"
                alt="User Image"
              />
            </a>
          </div>
          <div class="doc-info-cont">
            <h4 class="doc-name">
              <a href="#">{item.name}</a>
            </h4>
            <p class="doc-speciality">
             {item.detail}
            </p>
            <h5 class="doc-department">
              <img
                src={`/images/${item.img1}`}
                class="img-fluid"
                alt="Speciality"
              />
             {item.speciality}
            </h5>
            <div class="rating">
              <i class="fas fa-star filled"></i>
              <i class="fas fa-star filled"></i>
              <i class="fas fa-star filled"></i>
              <i class="fas fa-star filled"></i>
              <i class="fas fa-star"></i>
              <span class="d-inline-block average-rating">{item.star}</span>
            </div>
            <div class="clinic-details">
              <p class="doc-location">
                <i class="fas fa-map-marker-alt"></i> {item.loc}
              </p>
              <ul class="clinic-gallery">
                <li>
                  <a
                    href={`/images/${item.link1}`}
                    data-fancybox="gallery"
                  >
                    <img
                      src={`/images/${item.link1}`}
                      alt="Feature"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href={`/images/${item.link2}`}
                    data-fancybox="gallery"
                  >
                    <img
                      src={`/images/${item.link2}`}
                      alt="Feature"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href={`/images/${item.link3}`}
                    data-fancybox="gallery"
                  >
                    <img
                      src={`/images/${item.link3}`}
                      alt="Feature"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href={`/images/${item.link4}`}
                    data-fancybox="gallery"
                  >
                    <img
                      src={`/images/${item.link4}`}
                      alt="Feature"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div class="clinic-services">
              <span>{item.cardio}</span>
              <span> {item.white}</span>
            </div>
          </div>
        </div>

        
      <div class="doc-info-right">
        <div class="clini-infos">
          <ul>
            <li>
              <i class="far fa-thumbs-up"></i> {item.percent}
            </li>
            <li>
              <i class="far fa-comment"></i> {item.feedback}
            </li>
            <li>
              <i class="fas fa-map-marker-alt"></i> {item.location}
            </li>
            <li>
              <i class="far fa-money-bill-alt"></i> {item.fee}
              <i
                class="fas fa-info-circle"
                data-toggle="tooltip"
                title=""
                data-original-title="Lorem Ipsum"
              ></i>
            </li>
          </ul>
        </div>
        <div class="clinic-booking">
          <a class="view-pro-btn" href="#">
            View Profile
          </a>
          <a class="apt-btn" href="booking.html">
            Book Appointment
          </a>
        </div>
      </div>
      </div>

    </div>
  </div> );
}
 
export default Detail;