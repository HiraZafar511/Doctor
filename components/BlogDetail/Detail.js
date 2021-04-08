import BlogLeft from "../BlogList/Blog-leftSide";
import { useSelector } from "react-redux";
const Detail = () => {
  return (
    <div className="blog-detail">
      <div class="blog">
        <div class="blog-image">
          <a href="blog-details.html">
            <img class="img-fluid" src="/images/blog-01.jpg" alt="Post Image" />
          </a>
        </div>
        <h3 class="blog-title">
          <a href="blog-details.html">
            Doccure – Making your clinic painless visit?
          </a>
        </h3>
        <div class="blog-info clearfix">
          <div class="post-left">
            <ul>
              <li>
                <div class="post-author">
                  <a href="doctor-profile.html">
                    <img src="/images/doctor-thumb-01.jpg" alt="Post Author" />{" "}
                    <span>Dr. Ruby Perrin</span>
                  </a>
                </div>
              </li>
              <li>
                <i class="far fa-clock"></i>4 Dec 2019
              </li>
              <li>
                <i class="far fa-comments"></i>
                12 Comments
              </li>
              <li>
                <i class="fa fa-tags"></i>
                Health Tips
              </li>
            </ul>
          </div>
        </div>
        <div class="blog-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
            aut odit aut fugit, sed quia consequuntur magni dolores eos qui
            ratione voluptatem sequi nesciunt.<br></br>
            <br></br> Neque porro quisquam est, qui dolorem ipsum quia dolor sit
            amet, consectetur, adipisci velit, sed quia non numquam eius modi
            tempora incidunt ut labore et dolore magnam aliquam quaerat
            voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
            ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
            consequatur? Quis autem vel eum iure reprehenderit qui in ea
            voluptate velit esse quam nihil molestiae consequatur, vel illum qui
            dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et
            accusamus et iusto odio dignissimos ducimus qui blanditiis
            praesentium voluptatum deleniti atque corrupti quos dolores et quas
            molestias excepturi sint occaecati cupiditate non provident,
            similique sunt in culpa qui officia deserunt mollitia animi, id est
            laborum et dolorum fuga.<br></br>
            <br></br> Et harum quidem rerum facilis est et expedita distinctio.
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat facere possimus, omnis
            voluptas assumenda est, omnis dolor repellendus. Temporibus autem
            quibusdam et aut officiis debitis aut rerum necessitatibus saepe
            eveniet ut et voluptates repudiandae sint et molestiae non
            recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut
            aut reiciendis voluptatibus maiores alias consequatur aut
            perferendis doloribus asperiores repellat.
          </p>
        </div>
      </div>
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
    </div>
  );
};

export default Detail;
