import { GET_HOTSPOTS, ADD_HOTSPOT, DELETE_HOTPSOT } from "../actions/types";

const initialState = {
  hotSpots: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_HOTSPOTS:
      return {
        ...state,
      };
    default:
      return state;
  }
}
