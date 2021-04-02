import Calendar from "./Calender";
import CalList from "./CalList";


const index = () => {
  return (
    <div className="container-fluid">
      <div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
      <CalList/>
      </div>
      <div class="col-md-7 col-lg-8 col-xl-9">
     
      <Calendar/></div>
      </div>
  
  );
};

export default index;
