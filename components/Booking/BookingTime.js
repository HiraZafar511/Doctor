import Side from "../Combine/Sidebar/Side";
import { useState } from "react";
import BookingList from "./BookingList";

const BookingTime = () => {
  const [card, setCard] = useState([
    {
      img: "patient.jpg",
      name: "George Anderson",
      email: "tyroneroberts@adobe.com",
      date: "11 Nov 2019",

      time: "9:00 AM - 10:00 AM",
    },
    {
      img: "patient1.jpg",
      name: "Megan Bird",
      email: "tyroneroberts@adobe.com",
      date: "3 Nov 2019 ",

      time: "9:00 AM - 10:00 AM",
    },
    {
      img: "patient2.jpg",
      name: "Alvin Boykin",
      email: "tyroneroberts@adobe.com",
      date: "1 Nov 2019",
      time: "9:00 AM - 10:00 AM",
    },
    {
      img: "patient3.jpg",
      name: "Nicholas Hicks",
      email: "tyroneroberts@adobe.com",
      date: "08 April 2020 ",
      time: "9:00 AM - 10:00 AM",
    },
    {
      img: "patient4.jpg",
      name: "Nicholas Hicks",
      email: "tyroneroberts@adobe.com",
      date: "08 April 2020 ",
      time: "9:00 AM - 10:00 AM",
    },
    {
      img: "patient5.jpg",
      name: "Nicholas Hicks",
      email: "tyroneroberts@adobe.com",
      date: "08 April 2020 ",
      time: "9:00 AM - 10:00 AM",
    },
  ]);

  return (
    <div className="Booking">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
            <Side />
          </div>
          <div className="col-md-7 col-lg-8 col-xl-9">
            <div className="row fnt">
              <div className="col-md-12">
                <h3 class="mt-0">Booking Summary</h3>
                <div className="appointment-tab mt-5">
                  <div className="tab-content">
                    <div
                      className="tab-pane show active"
                      id="upcoming-appointments"
                    >
                      <div className="card card-table mb-0">
                        <div className="card-body">
                          <div className="table-responsive">
                            <table className="table table-hover table-center mb-0">
                              <thead>
                                <tr>
                                  <th>MENTEE LISTS</th>
                                  <th>SCHEDULED DATE</th>
                                  <th>SCHEDULED TIMINGS</th>
                                  <th>ACTION</th>
                                </tr>
                              </thead>

                              {card.map((item, key) => (
                                <tr>
                                  <BookingList item={item} />
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingTime;
