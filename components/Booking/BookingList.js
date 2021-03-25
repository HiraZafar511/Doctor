const BookingList = ({item}) => {
  return (
    <>
     
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
            {item.name} <span>{item.email}</span>
          </a>
        </h2>
      </td>
      <td>
        {item.date}
       
      </td>
      <td> <span style={{ backgroundColor: "rgb(3 105 179)",
  borderRadius: 4,
  color:" #fff",
  texTransform: "uppercase",
  padding: "3px 10px"}}>{item.time}</span></td>
     
     
      <td >
        <div >
          <a href="javascript:void(0);" className="btn btn-sm bg-info-light">
            <i className="far fa-eye"></i> View
          </a>

        
        </div>
      </td>
    </>
  );
};

export default BookingList;
