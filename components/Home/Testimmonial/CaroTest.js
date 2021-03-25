const Caro = ({ item }) => {
  return (
    <div
      className="testimonials-item"
      style={{ width: "100%", display: "inline-block" }}
    >
      <div className="card">
        <div className="card-header">
          <div className="d-flex align-items-center justify-content-between">
            <div className="">
              <img
                src={`/images/${item.img}`}
                alt=""
                width="83"
                className="rounded-circle"
              />
            </div>
            <div className="patient-details">
              <h5>{item.name}</h5>
              <h6>{item.illness}</h6>
            </div>
            <div>
              <img src="/images/blockquotes.png" alt="" />
            </div>
          </div>
        </div>
        <div className="card-body">
          <p className="doct">{item.body}</p>
        </div>
      </div>
    </div>
  );
};

export default Caro;
