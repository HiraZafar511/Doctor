import { useSelector } from "react-redux";

const Appointment = () => {
  const data = useSelector((state) => state.patientAppointment.data);

  return (
    <div className="tab-content ">
      <div id="pat_appointments" class="tab-pane  show active">
        <div class="card card-table mb-0">
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-hover table-center mb-0">
                <thead>
                  <tr>
                    <th>Doctor</th>
                    <th>Appt Date</th>
                    <th>Booking Date</th>
                    <th>Amount</th>
                    <th>Follow Up</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((data, key) => (
                    <tr>
                      <td>
                        <h2 class="table-avatar">
                          <a
                            href="doctor-profile.html"
                            class="avatar2 avatar-sm mr-2"
                          >
                            <img
                              class="avatar-img rounded-circle"
                              src={`/images/${data.img}`}
                              alt="User Image"
                            />
                          </a>
                          <a href="doctor-profile.html">
                            {data.name} <span>{data.field}</span>
                          </a>
                        </h2>
                      </td>
                      <td>
                        {data.date}
                        <span class="d-block text-info">{data.time}</span>
                      </td>
                      <td>{data.booking}</td>
                      <td>{data.amount}</td>
                      <td>{data.followup}</td>
                      <td>
                        <span
                          class={`badge badge-pill  ${
                            data.status == "Confirm"
                              ? "bg-success-light"
                              : data.status == "Cancelled"
                              ? "bg-danger-light"
                              : "bg-warning-light"
                          }`}
                        >
                          {data.status}
                        </span>
                      </td>
                      <td class="text-right">
                        <div class="table-action">
                          <a
                            href="javascript:void(0);"
                            class="btn btn-sm bg-success-light"
                          >
                            <i class="far fa-edit"></i> Edit
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
    </div>
  );
};

export default Appointment;
