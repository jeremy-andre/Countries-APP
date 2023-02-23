import {
  GET_COUNTRIES,
  GET_COUNTRY,
  SEARCH_COUNTRIES,
  SET_CONTINENT_FILTER,
} from "./actionsTypes";

const initialState = {
  countries: [],
  country: [],
  continentFilter: "",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return { ...state, countries: action.payload };
    case GET_COUNTRY:
      return { ...state, country: action.payload };
    case SEARCH_COUNTRIES:
      return { ...state, countries: action.payload };
    case SET_CONTINENT_FILTER:
      return { ...state, continentFilter: action.payload };
    default:
      return { ...state };
  }
};

export default rootReducer;
