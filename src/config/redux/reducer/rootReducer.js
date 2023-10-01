import { combineReducers } from "redux";

import userReducer from "./userReducer";
import articelReducer from "./articelReducer";

const rootReducer = combineReducers({
  user: userReducer,
  articel: articelReducer,
});

export default rootReducer;
