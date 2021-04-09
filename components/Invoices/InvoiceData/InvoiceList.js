import Side from "../../Combine/DrSidebar/index";
import { useSelector } from "react-redux";
import InvoiceItem from "./invoiceItem";

const Invoicelist = () => {
  const data = useSelector((state) => state.invoices.data);
  console.log(data)
  return (
    <div className="invoices">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
            <Side />
          </div>
          <div className="col-md-7 col-lg-8 col-xl-9">
            <div className="card card-table mb-0">
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-hover table-center mb-0">
                    <thead>
                      <tr>
                        <th>Invoice No</th>
                        <th>Patient</th>
                        <th>Amount</th>
                        <th>Paid On</th>
                        <th></th>
                      </tr>
                    </thead>

                    {!!data &&
                               data.map((item, key) => (
                                  <tr>
                                    <InvoiceItem item={item} />
                                  </tr>
                                ))}

                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoicelist;
