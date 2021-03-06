const Reviews = () => {
  return (
    <div className="review">
      <div class="widget review-listing">
        <ul class="comments-list">
          <li>
            <div class="comment">
              <img
                class="avatar avatar-sm rounded-circle"
                alt="User Image"
                src="/images/patient.jpg"
              />
              <div class="comment-body">
                <div class="meta-data">
                  <span class="comment-author">George Anderson</span>
                  <span class="comment-date">Reviewed 2 Days ago</span>
                  <div class="review-count rating">
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star"></i>
                  </div>
                </div>
                <p class="recommended">
                  <i class="far fa-thumbs-up"></i> I recommend the doctor
                </p>
                <p class="comment-content">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation. Curabitur
                  non nulla sit amet nisl tempus
                </p>
                <div class="comment-reply">
                  <a class="comment-btn" href="#">
                    <i class="fas fa-reply"></i> Reply
                  </a>
                  <p class="recommend-btn">
                    <span>Recommend?</span>
                    <a href="#" class="like-btn">
                      <i class="far fa-thumbs-up"></i> Yes
                    </a>
                    <a href="#" class="dislike-btn">
                      <i class="far fa-thumbs-down"></i> No
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <ul class="comments-reply">
              <li>
                <div class="comment">
                  <img
                    class="avatar avatar-sm rounded-circle"
                    alt="User Image"
                    src="/images/patient1.jpg"
                  />
                  <div class="comment-body">
                    <div class="meta-data">
                      <span class="comment-author">Megan Bird</span>
                      <span class="comment-date">Reviewed 3 Days ago</span>
                      <div class="review-count rating">
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star"></i>
                      </div>
                    </div>
                    <p class="comment-content">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam. Curabitur non nulla sit
                      amet nisl tempus
                    </p>
                    <div class="comment-reply">
                      <a class="comment-btn" href="#">
                        <i class="fas fa-reply"></i> Reply
                      </a>
                      <p class="recommend-btn">
                        <span>Recommend?</span>
                        <a href="#" class="like-btn">
                          <i class="far fa-thumbs-up"></i> Yes
                        </a>
                        <a href="#" class="dislike-btn">
                          <i class="far fa-thumbs-down"></i> No
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </li>

          <li>
            <div class="comment">
              <img
                class="avatar avatar-sm rounded-circle"
                alt="User Image"
                src="/images/patient2.jpg"
              />
              <div class="comment-body">
                <div class="meta-data">
                  <span class="comment-author">Alvin Boykin</span>
                  <span class="comment-date">Reviewed 4 Days ago</span>
                  <div class="review-count rating">
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star"></i>
                  </div>
                </div>
                <p class="comment-content">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation. Curabitur
                  non nulla sit amet nisl tempus
                </p>
                <div class="comment-reply">
                  <a class="comment-btn" href="#">
                    <i class="fas fa-reply"></i> Reply
                  </a>
                  <p class="recommend-btn">
                    <span>Recommend?</span>
                    <a href="#" class="like-btn">
                      <i class="far fa-thumbs-up"></i> Yes
                    </a>
                    <a href="#" class="dislike-btn">
                      <i class="far fa-thumbs-down"></i> No
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div class="all-feedback text-center">
          <a href="#" class="btn btn-primary btn-sm">
            Show all feedback <strong>(167)</strong>
          </a>
        </div>
      </div>
      <div class="write-review">
        <h4>
          Write a review for <strong>Dr. Fred Ortego</strong>
        </h4>

        <form>
          <div class="form-group">
            <label>Review</label>
            <div class="star-rating">
              <input id="star-5" type="radio" name="rating" value="star-5" />
              <label for="star-5" title="5 stars">
                <i class="active fa fa-star"></i>
              </label>
              <input id="star-4" type="radio" name="rating" value="star-4" />
              <label for="star-4" title="4 stars">
                <i class="active fa fa-star"></i>
              </label>
              <input id="star-3" type="radio" name="rating" value="star-3" />
              <label for="star-3" title="3 stars">
                <i class="active fa fa-star"></i>
              </label>
              <input id="star-2" type="radio" name="rating" value="star-2" />
              <label for="star-2" title="2 stars">
                <i class="active fa fa-star"></i>
              </label>
              <input id="star-1" type="radio" name="rating" value="star-1" />
              <label for="star-1" title="1 star">
                <i class="active fa fa-star"></i>
              </label>
            </div>
          </div>
          <div class="form-group">
            <label>Title of your review</label>
            <input
              class="form-control"
              type="text"
              placeholder="If you could say it in one sentence, what would you say?"
            />
          </div>
          <div class="form-group">
            <label>Your review</label>
            <textarea
              id="review_desc"
              maxlength="100"
              class="form-control"
            ></textarea>

            <div class="d-flex justify-content-between mt-3">
              <small class="text-muted">
                <span id="chars">100</span> characters remaining
              </small>
            </div>
          </div>
          <hr />
          <div class="form-group">
            <div class="terms-accept">
              <div class="custom-checkbox">
                <input type="checkbox" id="terms_accept" className="mr-3"/>
                <label for="terms_accept ">
                  I have read and accept <a href="#">Terms &amp; Conditions</a>
                </label>
              </div>
            </div>
          </div>
          <div class="submit-section">
            <button type="submit" class="btn btn-primary submit-btn">
              Add Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Reviews;
