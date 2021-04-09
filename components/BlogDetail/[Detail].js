import { useSelector } from "react-redux";
import AboutAuthor from "./AboutAuthor";

// export const getStaticPaths = async () => {
//   data = useSelector((state) => state.blogListLeft.data);

//   const paths = data.map((item) => {
//     return {
//       params: { id: item.id.toString() },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async (context) => {
//   const id = context.params.id;
//   const res = useSelector((state) => state.blogListLeft.data + id);

//   return {
//     props: { data: res },
//   };
// };

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
            ad minim veniam, quis nostrud exercitation ullamco sit laboris
            ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
            <br></br><br></br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco sit laboris
            ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </div>
      </div>
      <AboutAuthor />
     
    </div>
  );
};

export default Detail;
