const Locations = () => {
  return (
    <div className="locations">
      <div class="location-list">
        <div class="row">
          <div class="col-md-6">
            <div class="clinic-content">
              <h4 class="clinic-name">
                <a href="#">Smile Cute Cardiologist Care Center</a>
              </h4>
              <p class="doc-speciality">
                MDS - Periodontology and Oral Implantology, BDS
              </p>
              <div class="rating">
                <i class="fas fa-star filled"></i>
                <i class="fas fa-star filled"></i>
                <i class="fas fa-star filled"></i>
                <i class="fas fa-star filled"></i>
                <i class="fas fa-star"></i>
                <span class="d-inline-block average-rating">(4)</span>
              </div>
              <div class="clinic-details mb-0">
                <h5 class="clinic-direction">
                  {" "}
                  <i class="fas fa-map-marker-alt"></i> 2286 Sundown Lane,
                  Austin, Texas 78749, USA <br />
                  <a href="javascript:void(0);">Get Directions</a>
                </h5>
                <ul>
                  <li>
                    <a
                      href="/images/feature-01.jpg"
                      data-fancybox="gallery2"
                    >
                      <img
                        src="/images/feature-01.jpg"
                        alt="Feature Image"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="/images/feature-02.jpg"
                      data-fancybox="gallery2"
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
                      data-fancybox="gallery2"
                    >
                      <img
                        src="/images/feature-03.jpg"
                        alt="Feature Image"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="/images/feature-04.jpg"
                      data-fancybox="gallery2"
                    >
                      <img
                        src="/images/feature-04.jpg"
                        alt="Feature Image"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="clinic-timing">
              <div>
                <p class="timings-days">
                  <span> Mon - Sat </span>
                </p>
                <p class="timings-times">
                  <span>10:00 AM - 2:00 PM</span>
                  <span>4:00 PM - 9:00 PM</span>
                </p>
              </div>
              <div>
                <p class="timings-days">
                  <span>Sun</span>
                </p>
                <p class="timings-times">
                  <span>10:00 AM - 2:00 PM</span>
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-2">
            <div class="consult-price">$250</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
