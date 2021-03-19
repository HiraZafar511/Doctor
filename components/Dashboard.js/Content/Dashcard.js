const Dashcard = ({ item }) => {
  return (
    <>
      {/* <table class="table table-hover table-center mb-0"> */}

      <td>
        <h2 class="table-avatar">
          <a href="patient-profile.html" class="avatar avatar-sm mr-2">
            <img
              class="avatar-img rounded-circle"
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
        <span class="d-block text-info"> {item.time}</span>
      </td>
      <td> {item.purpose}</td>
      <td>{item.type}</td>
      <td class="text-center">{item.pay}</td>
      <td class="text-right">
        <div class="table-action">
          <a href="javascript:void(0);" class="btn btn-sm bg-info-light">
            <i class="far fa-eye"></i> View
          </a>

          <a href="javascript:void(0);" class="btn btn-sm bg-success-light">
            <i class="fas fa-check"></i> Accept
          </a>
          <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
            <i class="fas fa-times"></i> Cancel
          </a>
        </div>
      </td>

      {/* </table> */}
    </>
  );
};

export default Dashcard;
