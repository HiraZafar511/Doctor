const Appointment = () => {
  return (
    <div className="search-section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 col-xl-8">
            <div className="search-box">
              <h2>
                Search Doctor, <br />
                Make an Appointment !
              </h2>
              <div className="form-col">
                <form method="post" action="search.html">
                  <ul className="d-flex flex-wrap">
                    <li>
                      <input
                        type="text"
                        placeholder="Location"
                        className="form-control"
                      />
                    </li>
                    <li>
                      <input
                        type="text"
                        placeholder="Gender"
                        className="form-control"
                      />
                    </li>
                    <li>
                      <input
                        type="text"
                        placeholder="Phone Number"
                        className="form-control"
                      />
                    </li>
                    <li>
                      <input
                        type="submit"
                        value="Search"
                        className="btn-submit form-control"
                      />
                    </li>
                  </ul>
                </form>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-4"></div>
        </div>
      </div>
      <div className="search-right-img">
        <img src="/images/search-img.png" alt="" />
      </div>
    </div>
  );
};

export default Appointment;
