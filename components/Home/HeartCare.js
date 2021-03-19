import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const Heart = () => {
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

        <Carousel
          responsive={responsive}
          infinite={true}
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          renderButtonGroupOutside={true}
        >
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
        </Carousel>
      </div>
    </div>
  );
};

export default Heart;
