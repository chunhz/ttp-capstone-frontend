import {
  GET_HOTSPOTS,
  ADD_HOTSPOT,
  DEL_HOTSPOT,
  HOTSPOTS_LOADING,
  GET_CLOSE,
  GET_MANHATTAN,
  GET_QUEENS,
  GET_BROOKLYN,
  GET_STATENISLAND,
  GET_BRONX,

} from "./types";
import axios from "axios";


//GET ALL WIF
export const getHotSpots = () => (dispatch) => {
  dispatch(setHotSpotsLoading());
  axios.get("/hotSpots").then((res) =>
    dispatch({
      type: GET_HOTSPOTS,
      payload: res.data,
    })
  );
};

//GET Closest wifi by zipcode
export const getCloseHotSpots = (Postcode) => (dispatch) => {
  dispatch(setHotSpotsLoading());
  axios.get(`/hotSpots/closeBy${Postcode}` ).then((res) =>
    dispatch({
      type: GET_CLOSE,
      payload: res.data,
    })
  );
};


//Get Manhattan wifi
export const getManhattan = () => (dispatch) => {
  dispatch(setHotSpotsLoading());
  axios.get(`/hotSpots/manhattan` ).then((res) =>
    dispatch({
      type: GET_MANHATTAN,
      payload: res.data,
    })
  );
};

//Get Queens wifi
export const getQueens = () => (dispatch) => {
  dispatch(setHotSpotsLoading());
  axios.get(`/hotSpots/queens` ).then((res) =>
    dispatch({
      type: GET_QUEENS,
      payload: res.data,
    })
  );
};

//Get Staten Island wifi
export const getStatenIsland = () => (dispatch) => {
  dispatch(setHotSpotsLoading());
  axios.get(`/hotSpots/statenisland` ).then((res) =>
    dispatch({
      type: GET_STATENISLAND,
      payload: res.data,
    })
  );
};

//Get Brooklyn wifi
export const getBrooklyn = () => (dispatch) => {
  dispatch(setHotSpotsLoading());
  axios.get(`/hotSpots/brooklyn` ).then((res) =>
    dispatch({
      type: GET_BROOKLYN,
      payload: res.data,
    })
  );
};


//Get Bronx  wifi
export const getBronx = () => (dispatch) => {
  dispatch(setHotSpotsLoading());
  axios.get(`/hotSpots/bronx` ).then((res) =>
    dispatch({
      type: GET_BRONX,
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
