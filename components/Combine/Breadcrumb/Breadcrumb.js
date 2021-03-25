import Link from "next/link";

const Bread = () => {
  return (
    <div className="breadcrumb-bar">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-12 col-12">
            <nav aria-label="breadcrumb" className="page-breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="/">
                    <a href="index.html">Home</a>
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Dashboard
                </li>
              </ol>
            </nav>
            <h2 className="breadcrumb-title">Dashboard</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bread;
