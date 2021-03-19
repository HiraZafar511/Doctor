const TeamPro = ({ item }) => {
  return (
    <div class="feature-list-box">
      <div class="number-col text-right">
        <h5>{item.num}</h5>
      </div>
      <div class="feature-icon">
        <img src={`/images/${item.img}`} alt="" />
      </div>
      <h4>
        {item.title1} <br />
        {item.title2}
      </h4>
      <div class="plus-icon text-right">
        <i class="fas fa-plus-circle"></i>
      </div>
    </div>
  );
};

export default TeamPro;
