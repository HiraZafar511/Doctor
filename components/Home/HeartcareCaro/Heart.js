const Caro = ({ item }) => {
    return (
        <div className="card-heart">
        <div className="doc-img">
          <a href="#" tabindex="0">
            <img
              className="img-fluid"
              alt="User Image"
              src="/images/solution1.png"
            />
          </a>
        </div>
        <div className="pro-content">
          <div className="specialities-img">
            <img src={`/images/${item.img}`} alt="" />
          </div>
          <h5>{item.category}</h5>
          <h3 className="title">{item.title}</h3>
          <p className="speciality">
            {item.body}
          </p>
          <a
            href="doctor-profile.html"
            className="readmore-btn"
            tabindex="0"
          >
            <i className="fas fa-chevron-circle-right"></i> Read more
          </a>
        </div>
      </div>
    );
  };
  
  export default Caro;
  