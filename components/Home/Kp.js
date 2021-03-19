import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    return (
      <div class="section popular-section">
        <div class="container">
          <div class="section-header text-center">
            <h5>WHAT WE HAVE</h5>
            <h2>Heart Care based Solutions</h2>
            <p class="sub-title">
              We merge two services consulting and brilliant client Services for
              the patient healthcare. Used latest technology in hospital.
            </p>
          </div>

          <Slider {...settings}>
            <div className="card-heart">
              <div class="doc-img">
                <a href="#" tabindex="0">
                  <img
                    class="img-fluid"
                    alt="User Image"
                    src="/images/solution1.png"
                  />
                </a>
              </div>
              <div class="pro-content">
                <div class="specialities-img">
                  <img src="/images/specialities-01.png" alt="" />
                </div>
                <h5>SURGERY</h5>
                <h3 class="title">Heart Surgery</h3>
                <p class="speciality">
                  Lorem Ipsum is simply dummy text the printing and typesetting
                  industry.{" "}
                </p>
                <a href="doctor-profile.html" class="readmore-btn" tabindex="0">
                  <i class="fas fa-chevron-circle-right"></i> Read more
                </a>
              </div>
            </div>
            <div className="card-heart">
              <div class="doc-img">
                <a href="#" tabindex="0">
                  <img
                    class="img-fluid"
                    alt="User Image"
                    src="/images/solution1.png"
                  />
                </a>
              </div>
              <div class="pro-content">
                <div class="specialities-img">
                  <img src="/images/specialities-01.png" alt="" />
                </div>
                <h5>SURGERY</h5>
                <h3 class="title">Heart Surgery</h3>
                <p class="speciality">
                  Lorem Ipsum is simply dummy text the printing and typesetting
                  industry.{" "}
                </p>
                <a href="doctor-profile.html" class="readmore-btn" tabindex="0">
                  <i class="fas fa-chevron-circle-right"></i> Read more
                </a>
              </div>
            </div>
            <div className="card-heart">
              <div class="doc-img">
                <a href="#" tabindex="0">
                  <img
                    class="img-fluid"
                    alt="User Image"
                    src="/images/solution1.png"
                  />
                </a>
              </div>
              <div class="pro-content">
                <div class="specialities-img">
                  <img src="/images/specialities-01.png" alt="" />
                </div>
                <h5>SURGERY</h5>
                <h3 class="title">Heart Surgery</h3>
                <p class="speciality">
                  Lorem Ipsum is simply dummy text the printing and typesetting
                  industry.{" "}
                </p>
                <a href="doctor-profile.html" class="readmore-btn" tabindex="0">
                  <i class="fas fa-chevron-circle-right"></i> Read more
                </a>
              </div>
            </div>
            <div className="card-heart">
              <div class="doc-img">
                <a href="#" tabindex="0">
                  <img
                    class="img-fluid"
                    alt="User Image"
                    src="/images/solution1.png"
                  />
                </a>
              </div>
              <div class="pro-content">
                <div class="specialities-img">
                  <img src="/images/specialities-01.png" alt="" />
                </div>
                <h5>SURGERY</h5>
                <h3 class="title">Heart Surgery</h3>
                <p class="speciality">
                  Lorem Ipsum is simply dummy text the printing and typesetting
                  industry.{" "}
                </p>
                <a href="doctor-profile.html" class="readmore-btn" tabindex="0">
                  <i class="fas fa-chevron-circle-right"></i> Read more
                </a>
              </div>
            </div>
            <div className="card-heart">
              <div class="doc-img">
                <a href="#" tabindex="0">
                  <img
                    class="img-fluid"
                    alt="User Image"
                    src="/images/solution1.png"
                  />
                </a>
              </div>
              <div class="pro-content">
                <div class="specialities-img">
                  <img src="/images/specialities-01.png" alt="" />
                </div>
                <h5>SURGERY</h5>
                <h3 class="title">Heart Surgery</h3>
                <p class="speciality">
                  Lorem Ipsum is simply dummy text the printing and typesetting
                  industry.{" "}
                </p>
                <a href="doctor-profile.html" class="readmore-btn" tabindex="0">
                  <i class="fas fa-chevron-circle-right"></i> Read more
                </a>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
