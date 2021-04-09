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
              <Link href="/blogDetail" >
                <a href="#">
                  <img
                    class="img-fluid"
                    src={`/images/${item.img}`}
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
                        src={`/images/${item.img1}`}
                        alt="Post Author"
                      />{" "}
                      <span>{item.name}</span>
                    </a>
                  </div>
                </li>
                <li>
                  <i class="far fa-clock"></i> {item.date}
                </li>
              </ul>
              <h3 class="blog-title">
                <Link href="/blogDetail">
                  <a href="#">
                   {item.title}
                  </a>
                </Link>
              </h3>
              <p class="mb-0">
              {item.detail}
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
