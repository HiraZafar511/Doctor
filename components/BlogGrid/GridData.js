import { useSelector } from "react-redux";
import Link from "next/link";
import { Pagination } from 'antd';

const Grid = () => {
  const data = useSelector((state) => state.gridData.data);

  return (
      <>
    <div className="row blog-grid-row">
      {data.map((item, key) => (
        <div className="col-md-6 col-sm-12">
          <div className="blog grid-blog">
            <div class="blog-image">
              <Link href="/blogDetail">
                <a href="#">
                  <img
                    class="img-fluid"
                    src="/images/blog-01.jpg"
                    alt="Post Image"
                  />
                </a>
              </Link>
            </div>
            <div class="blog-content">
              <ul class="entry-meta meta-item">
                <li>
                  <div class="post-author">
                    <a href="doctor-profile.html">
                      <img
                        src="/images/doctor-thumb-01.jpg"
                        alt="Post Author"
                      />{" "}
                      <span>Dr. Ruby Perrin</span>
                    </a>
                  </div>
                </li>
                <li>
                  <i class="far fa-clock"></i> 4 Dec 2019
                </li>
              </ul>
              <h3 class="blog-title">
                <Link href="/blogDetail">
                  <a href="#">
                    Doccure – Making your clinic painless visit?
                  </a>
                </Link>
              </h3>
              <p class="mb-0">
                Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed
                do eiusmod tempor.
              </p>
            </div>
          </div>
        </div>
      ))}
         
    </div>  <div className="row blogB">
          <div className="col-md-12">
              <div className="text-center marginB">
              <Pagination defaultCurrent={1} total={50} />
              </div>
          
          </div>
      </div></>
  );
};

export default Grid;
