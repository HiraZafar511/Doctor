const Dashcard = ({ item }) => {
  return (
    <>
      {/* <table className="table table-hover table-center mb-0"> */}

      <td>
        <h2 className="table-avatar">
          <a href="patient-profile.html" className="avatar avatar-sm mr-2">
            <img
              className="avatar-img rounded-circle"
              src={`/images/${item.img}`}
              alt="User Image"
            />
          </a>
          <a className="pname" href="patient-profile.html">
            {item.name} <span>{item.id}</span>
          </a>
        </h2>
      </td>
      <td>
        {item.date}
        <span className="d-block text-info"> {item.time}</span>
      </td>
      <td> {item.purpose}</td>
      <td>{item.type}</td>
      <td className="text-center">{item.pay}</td>
      <td className="text-right">
        <div className="table-action">
          <a href="javascript:void(0);" className="btn btn-sm bg-info-light">
            <i className="far fa-eye"></i> View
          </a>

          <a href="javascript:void(0);" className="btn btn-sm bg-success-light">
            <i className="fas fa-check"></i> Accept
          </a>
          <a href="javascript:void(0);" className="btn btn-sm bg-danger-light">
            <i className="fas fa-times"></i> Cancel
          </a>
        </div>
      </td>

      {/* </table> */}
    </>
  );
};

export default Dashcard;
