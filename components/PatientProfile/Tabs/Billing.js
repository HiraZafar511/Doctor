import InvoiceItem from "../../Invoices/InvoiceData/InvoiceItem";
import { useSelector } from "react-redux";

const Billing = () => {
  const data = useSelector((state) => state.invoices.data);
  return (
    <>
      <div class="text-right">
        <a class="add-new-btn" href="add-billing.html">
          Add Billing
        </a>
      </div>
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
    </>
  );
};

export default Billing;
