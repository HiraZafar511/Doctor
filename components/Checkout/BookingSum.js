const Booking = () => {
  return (
    <div class="booking-sum">
      <div className="card booking-card">
        <div class="card-header">
          <h4 class="card-title">Booking Summary</h4>
        </div>
        <div class="card-body">
          <div class="booking-doc-info">
            <a href="doctor-profile.html" class="booking-doc-img">
              <img src="/images/doctor-thumb-02.jpg" alt="User Image" />
            </a>
            <div class="booking-info">
              <h4>
                <a href="doctor-profile.html">Dr. Fred Ortego</a>
              </h4>
              <div class="rating">
                <i class="fas fa-star filled"></i>
                <i class="fas fa-star filled"></i>
                <i class="fas fa-star filled"></i>
                <i class="fas fa-star filled"></i>
                <i class="fas fa-star"></i>
                <span class="d-inline-block average-rating">35</span>
              </div>
              <div class="clinic-details">
                <p class="doc-location">
                  <i class="fas fa-map-marker-alt"></i> Newyork, USA
                </p>
              </div>
            </div>
          </div>

          <div class="booking-summary">
            <div class="booking-item-wrap">
              <ul class="booking-date">
                <li>
                  Date <span>16 Nov 2019</span>
                </li>
                <li>
                  Time <span>10:00 AM</span>
                </li>
              </ul>
              <ul class="booking-fee">
                <li>
                  Consulting Fee <span>$100</span>
                </li>
                <li>
                  Booking Fee <span>$10</span>
                </li>
                <li>
                  Video Call <span>$50</span>
                </li>
              </ul>
              <div class="booking-total">
                <ul class="booking-total-list">
                  <li>
                    <span>Total</span>
                    <span class="total-cost">$160</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
