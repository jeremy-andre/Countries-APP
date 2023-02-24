import {
  GET_COUNTRIES,
  GET_COUNTRY,
  SEARCH_COUNTRIES,
  SET_CONTINENT_FILTER,
  SET_ORDER_FILTER,
  SET_POPULATION_FILTER,
  SET_CURRENT_PAGE,
  SET_TOTAL_PAGES,
  COUNTRIES_FILTERED,
  FAILURE,
} from "./actionsTypes";

const initialState = {
  countries: [],
  countriesFilter: [],
  country: [],
  continentFilter: "",
  orderFilter: "",
  populationFilter: "",
  currentPage: 1,
  totalPages: 0,
  error: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        countriesFilter: action.payload,
      };
    case GET_COUNTRY:
      return { ...state, country: action.payload };
    case SEARCH_COUNTRIES:
      return { ...state, countriesFilter: action.payload };
    case SET_CONTINENT_FILTER:
      return { ...state, continentFilter: action.payload };
    case SET_ORDER_FILTER:
      return { ...state, orderFilter: action.payload, populationFilter: "" };
    case SET_POPULATION_FILTER:
      return { ...state, populationFilter: action.payload, orderFilter: "" };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    case SET_TOTAL_PAGES:
      return { ...state, totalPages: action.payload };
    case COUNTRIES_FILTERED:
      return { ...state, countriesFilter: action.payload };
    case FAILURE:
      return { ...state, countries: [], error: action.error };
    default:
      return { ...state };
  }
};

export default rootReducer;
