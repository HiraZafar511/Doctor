const InvoiceItem = ({ item }) => {
  return (
    <>
     
        <td>
          <a href="#" style={{ color: "#272b41" }}>
            {item.invoice}
          </a>
        </td>
        <td>
          <h2 class="table-avatar">
            <a
              href="#"
              class="avatar avatar-sm mr-2"
              style={{ width: "4rem", height: "4rem" }}
            >
              <img
                class="avatar-img rounded-circle"
                src={`/images/${item.img}`}
                alt="User Image"
              />
            </a>
            <a href="#">
              {item.name} <span>{item.id}</span>
            </a>
          </h2>
        </td>
        <td>{item.pay}</td>
        <td>{item.date}</td>
        <td class="text-right">
          <div class="table-action">
            <a href="invoice-view.html" class="btn btn-sm bg-info-light">
              <i class="far fa-eye"></i> View
            </a>
            <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
              <i class="fas fa-print"></i> Print
            </a>
          </div>
        </td>
    
    </>
  );
};

export default InvoiceItem;
