import { useSelector } from "react-redux";

const Prescription = () => {
  const data = useSelector((state) => state.prescription.data);

  return (
    <div class="tab-pane  active show prescription" id="pres">
      <div class="text-right">
        <a href="add-prescription.html" class="add-new-btn">
          Add Prescription
        </a>
      </div>

      <div class="card card-table mb-0">
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-hover table-center mb-0">
              <thead>
                <tr>
                  <th>Date </th>
                  <th>Name</th>
                  <th>Created by </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, key) => (
                  <tr>
                    <td>{item.date}</td>
                    <td>{item.pers}</td>
                    <td>
                      <h2 class="table-avatar">
                        <a
                          href="doctor-profile.html"
                          class="avatar2 avatar-sm mr-2"
                        >
                          <img
                            class="avatar-img rounded-circle"
                            src={`/images/${item.img}`}
                            alt="User Image"
                          />
                        </a>
                        <a href="doctor-profile.html">
                         {item.name} <span>{item.field}</span>
                        </a>
                      </h2>
                    </td>
                    <td class="text-right">
                      <div class="table-action ">
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
    </div>
  );
};

export default Prescription;
