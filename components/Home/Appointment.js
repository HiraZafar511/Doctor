const Appointment = () => {
  return (
    <div class="search-section">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-6 col-xl-8">
            <div class="search-box">
              <h2>
                Search Doctor, <br />
                Make an Appointment !
              </h2>
              <div class="form-col">
                <form method="post" action="search.html">
                  <ul class="d-flex flex-wrap">
                    <li>
                      <input
                        type="text"
                        placeholder="Location"
                        class="form-control"
                      />
                    </li>
                    <li>
                      <input
                        type="text"
                        placeholder="Gender"
                        class="form-control"
                      />
                    </li>
                    <li>
                      <input
                        type="text"
                        placeholder="Phone Number"
                        class="form-control"
                      />
                    </li>
                    <li>
                      <input
                        type="submit"
                        value="Search"
                        class="btn-submit form-control"
                      />
                    </li>
                  </ul>
                </form>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-6 col-xl-4"></div>
        </div>
      </div>
      <div class="search-right-img">
        <img src="/images/search-img.png" alt="" />
      </div>
    </div>
  );
};

export default Appointment;
