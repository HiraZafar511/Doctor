const Caro = ({ item }) => {
  return (
    <div
      class="testimonials-item"
      style={{ width: "100%", display: "inline-block" }}
    >
      <div class="card">
        <div class="card-header">
          <div class="d-flex align-items-center justify-content-between">
            <div class="">
              <img
                src={`/images/${item.img}`}
                alt=""
                width="83"
                class="rounded-circle"
              />
            </div>
            <div class="patient-details">
              <h5>{item.name}</h5>
              <h6>{item.illness}</h6>
            </div>
            <div>
              <img src="/images/blockquotes.png" alt="" />
            </div>
          </div>
        </div>
        <div class="card-body">
          <p className="doct">{item.body}</p>
        </div>
      </div>
    </div>
  );
};

export default Caro;
