import { combineReducers } from "redux";

import RecordingReducer from "./RecordingReducer";

const RootReducer = combineReducers({
  recording: RecordingReducer,
});

export default RootReducer;
