import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import Appointment from "./reducers/appointment";
import Schedual from "./reducers/schedual";

const reducers = combineReducers({
  Appointment,
  Schedual,
});

export const initStore = (initialState = {}) => {
  return createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
};
