const Blog = () => {
  return (
    <div className="blog-section">
      <div className="container">
        <div className="section-header text-center">
          <h5>READ OUR BLOG</h5>
          <h2>Featured News and Advices</h2>
          <p className="sub-title">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took
          </p>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="blog-widget">
              <a href="#" className="blog-img">
                <img src="/images/blog1.png" alt="" />
              </a>
              <div className="date-col">
                <span>14 Aug 2020</span>
              </div>
              <div className="blog-content text-center">
                <h6>Expert Nursing</h6>
                <h5>Is Running Really Good for the Heart?</h5>
                <p>
                  There are lorem ipsum is simply free many variations of Ipsum
                  the majority suffered.
                </p>
                <a href="blog-list.html" className="readmore-btn" tabindex="-1">
                  <i className="fas fa-chevron-circle-right"></i> Read more
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="blog-widget">
              <a href="#" className="blog-img">
                <img src="/images/blog2.png" alt="" />
              </a>
              <div className="date-col">
                <span>12 Aug 2020</span>
              </div>
              <div className="blog-content text-center">
                <h6>Heath care Expert</h6>
                <h5>Modeling data increase to endovascular therapy</h5>
                <p>
                  There are lorem ipsum is simply free many variations of Ipsum
                  the majority suffered.
                </p>
                <a href="blog-list.html" className="readmore-btn" tabindex="-1">
                  <i className="fas fa-chevron-circle-right"></i> Read more
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="blog-widget">
              <a href="#" className="blog-img">
                <img src="/images/blog3.png" alt="" />
              </a>
              <div className="date-col">
                <span>10 Aug 2020</span>
              </div>
              <div className="blog-content text-center">
                <h6>Individual Approach</h6>
                <h5>Get the Exercise Tips for Limited Mobility</h5>
                <p>
                  There are lorem ipsum is simply free many variations of Ipsum
                  the majority suffered.
                </p>
                <a href="blog-list.html" className="readmore-btn" tabindex="-1">
                  <i className="fas fa-chevron-circle-right"></i> Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
