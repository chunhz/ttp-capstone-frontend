import {
  GET_HOTSPOTS,
  ADD_HOTSPOT,
  DEL_HOTSPOT,
  HOTSPOTS_LOADING,
} from "../actions/types";

const initialState = {
  hotSpots: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_HOTSPOTS:
      return {
        ...state,
        hotSpots: action.payload,
        loading: false,
      };
    case DEL_HOTSPOT:
      return {
        ...state,
        hotSpots: state.hotSpots.filter(
          (hotSpot) => hotSpot.id !== action.payload
        ),
      };
    case ADD_HOTSPOT:
      return {
        ...state,
        hotSpots: [action.payload, ...state.hotSpots],
      };
    case HOTSPOTS_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
