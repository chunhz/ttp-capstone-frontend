import {
  GET_HOTSPOTS,
  ADD_HOTSPOT,
  DEL_HOTSPOT,
  HOTSPOTS_LOADING,
} from "./types";
import axios from "axios";

export const getHotSpots = () => (dispatch) => {
  dispatch(setHotSpotsLoading());
  axios.get("/hotSpots").then((res) =>
    dispatch({
      type: GET_HOTSPOTS,
      payload: res.data,
    })
  );
};

export const delHotSpots = (id) => {
  return {
    type: DEL_HOTSPOT,
    payload: id,
  };
};

export const addHotSpots = (hotSpot) => {
  return {
    type: ADD_HOTSPOT,
    payload: hotSpot,
  };
};

export const setHotSpotsLoading = () => {
  return {
    type: HOTSPOTS_LOADING,
  };
};
