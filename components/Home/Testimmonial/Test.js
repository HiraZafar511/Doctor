import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";
import CaroTest from "./CaroTest";
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
  const [caro, setCaro] = useState([
    {
      img: "patient.jpg",
      name: "Joseph Butler",
      illness: "Heart Implant",
      body:
        " It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem",
    },
    {
      img: "patient1.jpg",
      name: "Ana Butler",
      illness: "Heart Implant",
      body:
        " It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem",
    },
    {
      img: "patient2.jpg",
      name: "Ami Smith",
      illness: "Heart Implant",
      body:
        " It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem",
    },
    {
      img: "patient5.jpg",
      name: "James Smith",
      illness: "Heart Implant",
      body:
        " It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem",
    },
  ]);
  return (
    <div class="testimonials">
      <div class="container">
        <div class="section-header text-center">
          <h5>TESTIMONIALS</h5>
          <h2>What Patient say about us</h2>
          <p class="sub-title">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took
          </p>
        </div>
        <div class="row">
          <div class="col-12">
            <Carousel
              responsive={responsive}
              infinite={true}
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
              renderButtonGroupOutside={true}
              showDots={true}
            >
              {caro.map((item, key) => (
                <CaroTest item={item} />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heart;
