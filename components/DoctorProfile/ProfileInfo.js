import Tab from "./Tabs";

const Doctorprofile = () => {
  return (
    <div className="doctor-profile">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <div class="doctor-widget d-flex" style={{flexWrap:"wrap"}}>
              <div class="doc-info-left disf" style={{flexWrap:"wrap"}}>
                <div class="doctor-img">
                  <img
                    src="/images/doctor-thumb-02.jpg"
                    class="img-fluid"
                    alt="User Image"
                  />
                </div>
                <div class="doc-info-cont">
                  <h4 class="doc-name">Dr. Fred Ortego</h4>
                  <p class="doc-speciality">
                    BDS, MDS - Oral &amp; Maxillofacial Surgery
                  </p>
                  <p class="doc-department">
                    <img
                      src="/images/specialities-05.png"
                      class="img-fluid"
                      alt="Speciality"
                    />
                    Cardiologists
                  </p>
                  <div class="rating">
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star"></i>
                    <span class="d-inline-block average-rating">(35)</span>
                  </div>
                  <div class="clinic-details">
                    <p class="doc-location">
                      <i class="fas fa-map-marker-alt"></i> Newyork, USA -{" "}
                      <a href="#;">Get Directions</a>
                    </p>
                    <ul class="clinic-gallery">
                      <li>
                        <a
                          href="assets/img/features/feature-01.jpg"
                          data-fancybox="gallery"
                        >
                          <img
                            src="/images/feature-01.jpg"
                            alt="Feature"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="/images/feature-02.jpg"
                          data-fancybox="gallery"
                        >
                          <img
                            src="/images/feature-02.jpg"
                            alt="Feature Image"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="/images/feature-03.jpg"
                          data-fancybox="gallery"
                        >
                          <img
                            src="/images/feature-03.jpg"
                            alt="Feature"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="/images/feature-04.jpg"
                          data-fancybox="gallery"
                        >
                          <img
                            src="/images/feature-04.jpg"
                            alt="Feature"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="clinic-services">
                    <span>Cardiologist Fillings</span>
                    <span>Teeth Whitneing</span>
                  </div>
                </div>
              </div>

              <div class="doc-info-right">
                <div class="clini-infos">
                  <ul>
                    <li>
                      <i class="far fa-thumbs-up"></i> 99%
                    </li>
                    <li>
                      <i class="far fa-comment"></i> 35 Feedback
                    </li>
                    <li>
                      <i class="fas fa-map-marker-alt"></i> Newyork, USA
                    </li>
                    <li>
                      <i class="far fa-money-bill-alt"></i> $100 per hour
                    </li>
                  </ul>
                </div>
                <div class="doctor-action">
                  <a href="#" class="btn btn-white fav-btn">
                    <i class="far fa-bookmark"></i>
                  </a>
                  <a href="chat.html" class="btn btn-white msg-btn">
                    <i class="far fa-comment-alt"></i>
                  </a>
                  <a
                    href="#"
                    class="btn btn-white call-btn"
                    data-toggle="modal"
                    data-target="#voice_call"
                  >
                    <i class="fas fa-phone"></i>
                  </a>
                  <a
                    href="#"
                    class="btn btn-white call-btn"
                    data-toggle="modal"
                    data-target="#video_call"
                  >
                    <i class="fas fa-video"></i>
                  </a>
                </div>
                <div class="clinic-booking">
                  <a class="apt-btn" href="booking.html">
                    Book Appointment
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
       <div className="card">
           <div className="card-body">
           <Tab/>
           </div>
           
       </div>
      </div>
    </div>
  );
};

export default Doctorprofile;
