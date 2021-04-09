import { useSelector } from "react-redux";
import { Pagination } from 'antd';
import Link from "next/link";

const BlogLeft = () => {
  const data = useSelector((state) => state.blogListLeft.data);

  return (
   <>
      {data.map((item, key) => (
        <div class="blog">
          <div class="blog-image">
          <Link href="/blogDetail">
                <a href="#">
                  <img
                    class="img-fluid"
                    src={`/images/${item.img}`}
                    alt="Post Image"
                  />
                </a>
              </Link>
          </div>
          <h3 class="blog-title">
          <Link href="/blogDetail">
                  <a href="#">
                   {item.title}
                  </a>
                </Link>
          </h3>
          <div class="blog-info clearfix">
            <div class="post-left">
              <ul>
                <li>
                  <div class="post-author">
                    <a href="doctor-profile.html">
                      <img
                        src="/images/doctor-thumb-01.jpg"
                        alt="Post Author"
                      />{" "}
                      <span>{item.name}</span>
                    </a>
                  </div>
                </li>
                <li>
                  <i class="far fa-clock"></i>{item.date}
                </li>
                <li>
                  <i class="far fa-comments"></i>{item.comment}
                </li>
                <li>
                  <i class="fa fa-tags"></i>{item.tips}
                </li>
              </ul>
            </div>
          </div>
          <div class="blog-content">
            <p>
           {item.detail}
            </p>
           

            <Link href="/blogDetail">
            <a href="blog-details.html" class="read-more">
              Read More
            </a>
                </Link>

          </div>
        </div>
      ))}
      <div className="row blogB">
          <div className="col-md-12">
              <div className="text-center marginB">
              <Pagination defaultCurrent={1} total={50} />
              </div>
          
          </div>
      </div>
     
   </>
  );
};

export default BlogLeft;
