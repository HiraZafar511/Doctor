const About = () => {
    return (  <div className="blog-detail">

<div class="card blog-share clearfix">
        <div class="card-header">
          <h4 class="card-title">Share the post</h4>
        </div>
        <div class="card-body">
          <ul class="social-share">
            <li>
              <a href="#" title="Facebook">
                <i class="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#" title="Twitter">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#" title="Linkedin">
                <i class="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="#" title="Google Plus">
                <i class="fab fa-google-plus"></i>
              </a>
            </li>
            <li>
              <a href="#" title="Youtube">
                <i class="fab fa-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="card author-widget clearfix">
        <div class="card-header">
          <h4 class="card-title">About Author</h4>
        </div>
        <div class="card-body">
          <div class="about-author">
            <div class="about-author-img">
              <div class="author-img-wrap">
                <a href="doctor-profile.html">
                  <img
                    class="img-fluid rounded-circle"
                    alt=""
                    src="/images/doctor-thumb-02.jpg"
                  />
                </a>
              </div>
            </div>
            <div class="author-details">
              <a href="doctor-profile.html" class="blog-author-name">
                Dr. Fred Ortego
              </a>
              <p class="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="card new-comment clearfix">
        <div class="card-header">
          <h4 class="card-title">Leave Comment</h4>
        </div>
        <div class="card-body">
          <form>
            <div class="form-group">
              <label>
                Name <span class="text-danger">*</span>
              </label>
              <input type="text" class="form-control" />
            </div>
            <div class="form-group">
              <label>
                Your Email Address <span class="text-danger">*</span>
              </label>
              <input type="email" class="form-control" />
            </div>
            <div class="form-group">
              <label>Comments</label>
              <textarea rows="4" class="form-control"></textarea>
            </div>
            <div class="submit-section">
              <button class="btn btn-primary submit-btn" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div> );
}
 
export default About;