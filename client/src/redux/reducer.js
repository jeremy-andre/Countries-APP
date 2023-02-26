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
  // TODO
  Allcountries: [],
  countries: [],
  //  ID
  country: [],
  //  FILTROS
  continentFilter: "",
  orderFilter: "",
  populationFilter: "",
  //  CARGADORES
  loadingCountries: false,
  loadingCountriesFilter: false,
  //  PAGINADO
  indexOfFirstElement: 0,
  indexOfLastElement: 10,

  error: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        Allcountries: action.payload,
        loadingCountries: true,
      };
    case GET_COUNTRY:
      return { ...state, country: action.payload };
    case SEARCH_COUNTRIES:
      return { ...state, Allcountries: action.payload };
    case SET_CONTINENT_FILTER:
      return { ...state, continentFilter: action.payload };
    case SET_ORDER_FILTER:
      return { ...state, orderFilter: action.payload, populationFilter: "" };
    case SET_POPULATION_FILTER:
      return { ...state, populationFilter: action.payload, orderFilter: "" };
    case SET_CURRENT_PAGE:
      return { ...state, indexOfFirstElement: action.payload };
    case SET_TOTAL_PAGES:
      return { ...state, indexOfLastElement: action.payload };
    case COUNTRIES_FILTERED:
      return {
        ...state,
        countries: action.payload,
        loadingCountriesFilter: true,
      };
    case FAILURE:
      return { ...state, countries: [], error: action.error };
    default:
      return { ...state };
  }
};

export default rootReducer;
