import GridData from "./GridData";
import BlogSide from "../Combine/Blog/BlogRightSide"

const index = () => {
  return (
    <div className="bloglist">
      <div className="container">
        <div className="row">
          <div class="col-lg-8 col-md-12">
           <GridData/>
          </div>
          <div className="col-lg-4 col-md-12 sidebar-right theiaStickySidebar">
            <BlogSide />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
