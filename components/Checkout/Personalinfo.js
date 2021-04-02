const Info = () => {
  return (
      <div className="personal-info">
    <div className="card">
      <div className="card-body">
        <form action="booking-success.html">
          <div class="info-widget">
            <h4 class="card-title">Personal Information</h4>
            <div class="row">
              <div class="col-md-6 col-sm-12">
                <div class="form-group card-label">
                  <label>First Name</label>
                  <input class="form-control" type="text" />
                </div>
              </div>
              <div class="col-md-6 col-sm-12">
                <div class="form-group card-label">
                  <label>Last Name</label>
                  <input class="form-control" type="text" />
                </div>
              </div>
              <div class="col-md-6 col-sm-12">
                <div class="form-group card-label">
                  <label>Email</label>
                  <input class="form-control" type="email" />
                </div>
              </div>
              <div class="col-md-6 col-sm-12">
                <div class="form-group card-label">
                  <label>Phone</label>
                  <input class="form-control" type="text" />
                </div>
              </div>
            </div>
            <div class="exist-customer">
              Existing Customer? <a href="#">Click here to login</a>
            </div>
          </div>
          <div class="payment-widget">
            <h4 class="card-title">Payment Method</h4>

            <div class="payment-list">
            <label class="payment-radio credit-card-option">
                <input type="radio" name="radio" className="dn" />
                <span class="checkmark"></span>
               Credit Card
              </label>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group card-label">
                    <label for="card_name">Name on Card</label>
                    <input class="form-control" id="card_name" type="text" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group card-label">
                    <label for="card_number">Card Number</label>
                    <input
                      class="form-control"
                      id="card_number"
                      placeholder="1234  5678  9876  5432"
                      type="text"
                    />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group card-label">
                    <label for="expiry_month">Expiry Month</label>
                    <input
                      class="form-control"
                      id="expiry_month"
                      placeholder="MM"
                      type="text"
                    />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group card-label">
                    <label for="expiry_year">Expiry Year</label>
                    <input
                      class="form-control"
                      id="expiry_year"
                      placeholder="YY"
                      type="text"
                    />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group card-label">
                    <label for="cvv">CVV</label>
                    <input class="form-control" id="cvv" type="text" />
                  </div>
                </div>
              </div>
            </div>

            <div class="payment-list">
              <label class="payment-radio paypal-option">
                <input type="radio" name="radio" className="dn"/>
                <span class="checkmark"></span>
                Paypal
              </label>
            </div>

            <div class="terms-accept">
              <div class="custom-checkbox">
                <input type="checkbox" id="terms_accept"/>
                <label for="terms_accept" className=" ml-3">
                  I have read and accept <a href="#">Terms &amp; Conditions</a>
                </label>
              </div>
            </div>

            <div class="submit-section mt-5">
              <button type="submit" class="btn btn-primary submit-btn">
                Confirm and Pay
              </button>
            </div>
          </div>
        </form>
      </div>
    </div></div>
  );
};

export default Info;
