import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";
// import Heart from "./Heart";

import { useSelector, useDispatch } from "react-redux";
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
const HeartCaro = () => {

  const caro= useSelector((state)=>state.heartCareCaro.data);
  const dispatch= useDispatch();
  console.log(caro);
  return (
    <div className="testimonials">
      <div className="container">
        <div className="section-header text-center">
          <h5>TESTIMONIALS</h5>
          <h2>What Patient say about us</h2>
          <p className="sub-title">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took
          </p>
        </div>
        <div className="row">
          <div className="col-12">
            <Carousel
              responsive={responsive}
              infinite={true}
              transitionDuration={500}
              containerclassName="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListclassName="custom-dot-list-style"
              itemclassName="carousel-item-padding-40-px"
              renderButtonGroupOutside={true}
              showDots={true}
              LeftArrow={true}
            >
              {caro.map((item, key) => (
                // <Heart item={item} />
                <div className="card-heart">
                <div className="doc-img">
                  <a href="#" tabindex="0">
                    <img
                      className="img-fluid"
                      alt="User Image"
                      src="/images/solution1.png"
                    />
                  </a>
                </div>
                <div className="pro-content">
                  <div className="specialities-img">
                    <img src={`/images/${item.img}`} alt="" />
                  </div>
                  <h5>{item.category}</h5>
                  <h3 className="title">{item.title}</h3>
                  <p className="speciality">
                    {item.body}
                  </p>
                  <a
                    href="doctor-profile.html"
                    className="readmore-btn"
                    tabindex="0"
                  >
                    <i className="fas fa-chevron-circle-right"></i> Read more
                  </a>
                </div>
              </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeartCaro;
