import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import appointment from "./reducers/appointment";
import schedual from "./reducers/schedual";
import heartCareCaro from "./reducers/home/heartCareCaro";
import testimonial from "./reducers/home/testimonial";
import dashboard from "./reducers/dashboard";
import booking from "./reducers/booking";
import invoices from "./reducers/invoices";
import mapGrid from "./reducers/mapGrid";
import mapList from "./reducers/mapList";
import patientList from "./reducers/patientList";
import patientAppointment from "./reducers/patientProfile/appointment";
import prescription from "./reducers/patientProfile/prescription";
import medicalRecord from "./reducers/patientProfile/medicalRecord";
import blogList from "./reducers/blog/blogList/blogListSide";
import blogListLeft from "./reducers/blog/blogList/blogListLeft";
import gridData from "./reducers/blog/blogGrid/gridData";


const reducers = combineReducers({
  heartCareCaro,
  testimonial,
  dashboard,
  appointment,
  schedual,
  booking,
  invoices,
  mapGrid,
  mapList,
  patientList,
  patientAppointment,
  prescription,
  medicalRecord,
  blogList,
  blogListLeft,
  gridData,

 
});

// export const initStore = (initialState = {}) => {
//   return createStore(
//     reducers,
//     initialState,
//     composeWithDevTools(applyMiddleware(thunk))
//   );
// };
const store = createStore(reducers, {}, applyMiddleware(thunk));
export default store;
