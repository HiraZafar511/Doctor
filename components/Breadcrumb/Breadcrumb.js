import Link from "next/link";

const Bread = () => {
  return (
    <div class="breadcrumb-bar">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-md-12 col-12">
            <nav aria-label="breadcrumb" class="page-breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <Link href="/">
                    <a href="index.html">Home</a>
                  </Link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Dashboard
                </li>
              </ol>
            </nav>
            <h2 class="breadcrumb-title">Dashboard</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bread;
