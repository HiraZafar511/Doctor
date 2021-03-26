import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import appointment from "./reducers/appointment";
import schedual from "./reducers/schedual";
import header from "./reducers/header";
import heartCareCaro from "./reducers/heartCareCaro";

const reducers = combineReducers({
  header,
  heartCareCaro,
  appointment,
  schedual,
});

// export const initStore = (initialState = {}) => {
//   return createStore(
//     reducers,
//     initialState,
//     composeWithDevTools(applyMiddleware(thunk))
//   );
// };
const store= createStore(reducers);
export default store;
