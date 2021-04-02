import Side from "../Combine/Sidebar/Side";
import { useState } from "react";
import SubAppoint from "./SubAppoint";
import { useSelector } from "react-redux";
const Appoint = () => {

const appointment= useSelector((state)=>state.appointment.data)

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
          <Side />
        </div>
        <div className="col-md-7 col-lg-8 col-xl-9">
          {appointment.map((item, key) => (
            <SubAppoint item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Appoint;
