const TeamPro = ({ item }) => {
  return (
    <div className="feature-list-box">
      <div className="number-col text-right">
        <h5>{item.num}</h5>
      </div>
      <div className="feature-icon">
        <img src={`/images/${item.img}`} alt="" />
      </div>
      <h4>
        {item.title1} <br />
        {item.title2}
      </h4>
      <div className="plus-icon text-right">
        <i className="fas fa-plus-circle"></i>
      </div>
    </div>
  );
};

export default TeamPro;
