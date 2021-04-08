import { useSelector } from "react-redux";

const BlogSide = () => {
  const data = useSelector((state) => state.blogList.data);
  const cate = useSelector((state) => state.blogList.categories);
  const tag = useSelector((state) => state.blogList.tags);
  
  return (
    <div
      className="blog-right"
      style={{
        paddingTop: 0,
        paddingBottom: 1,
        position: "static",
        transform: "none",
      }}
    >
      <div class="card search-widget">
        <div class="card-body">
          <form class="search-form">
            <div class="input-group">
              <input
                type="text"
                placeholder="Search..."
                class="form-control"
                style={{ width: "75%" }}
              />
              <div class="input-group-append">
                <button type="submit" class="btn btn-primary">
                  <i class="fa fa-search"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="card post-widget">
        <div class="card-header">
          <h4 class="card-title">Latest Posts</h4>
        </div>
        <div class="card-body">
          <ul class="latest-posts">
            {data.map((item, key) => (
              <li>
                <div class="post-thumb">
                  <a href="blog-details.html">
                    <img class="img-fluid" src={`/images/${item.img}`} alt="" />
                  </a>
                </div>
                <div class="post-info">
                  <h4>
                    <a href="blog-details.html">{item.title}</a>
                  </h4>
                  <p>{item.date}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div class="card category-widget">
        <div class="card-header">
          <h4 class="card-title">Blog Categories</h4>
        </div>
        <div class="card-body">
          <ul class="categories">
            {cate.map((item, key) => (
              <li>
                <a href="#">
                  {item.item} <span>{item.num}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div class="card tags-widget">
        <div class="card-header">
          <h4 class="card-title">Tags</h4>
        </div>
        <div class="card-body">
          <ul class="tags">
            {tag.map((item, key) => (
              <li>
                <a href="#" class="tag">
                  {item.tag}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogSide;
