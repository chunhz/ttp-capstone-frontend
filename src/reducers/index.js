import { combineReducers } from "redux";
import HotSpotReducer from "./HotSpotReducer";

export default combineReducers({
  hotSpot: HotSpotReducer,
});
