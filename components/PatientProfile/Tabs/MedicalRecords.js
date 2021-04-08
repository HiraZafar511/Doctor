import { useSelector } from "react-redux";

const Medical = () => {
  const data = useSelector((state) => state.medicalRecord.data);
  console.log(data)
  return (
    <>
      <div class="text-right">
        <a class="add-new-btn" href="add-billing.html">
          Add Medical Records
        </a>
      </div>
      <div className="card card-table mb-0">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover table-center mb-0">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Date </th>
                  <th>Description</th>
                  <th>Attachment</th>
                  <th>Created</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {data.map((item, key) => (
                  <tr>
                    <td>
                      <a href="#" style={{ color: "#272b41" }}>
                       {item.id}
                      </a>
                    </td>
                    <td>{item.date}</td>
                    <td>{item.des}</td>
                    <td>
                      <a href="#" style={{ color: "#272b41" }}>
                       {item.attachment}
                      </a>
                    </td>
                    <td>
                      <h2 class="table-avatar">
                        <a
                          href="doctor-profile.html"
                          class="avatar2 avatar-sm mr-2"
                        >
                          <img
                            class="avatar-img rounded-circle"
                            src="/images/doctor-thumb-01.jpg"
                            alt="User Image"
                          />
                        </a>
                        <a href="doctor-profile.html">
                          {item.name} <span>{item.field}</span>
                        </a>
                      </h2>
                    </td>
                    <td class="text-right">
                      <div class="table-action">
                        <a
                          href="javascript:void(0);"
                          class="btn btn-sm bg-primary-light"
                        >
                          <i class="fas fa-print"></i> Print
                        </a>
                        <a
                          href="javascript:void(0);"
                          class="btn btn-sm bg-info-light"
                        >
                          <i class="far fa-eye"></i> View
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Medical;
