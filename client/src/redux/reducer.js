import {
  GET_COUNTRIES,
  GET_ACTIVITIES,
  GET_COUNTRY,
  SEARCH_COUNTRIES,
  SET_SEARCH_TERM,
  SET_CONTINENT_FILTER,
  SET_ORDER_FILTER,
  SET_POPULATION_FILTER,
  SET_ACTIVITY_SELECT,
  SET_CURRENT_PAGE,
  SET_TOTAL_PAGES,
  COUNTRIES_FILTERED,
  CREATE_ACTIVITY_SUCCESS,
  FAILURE,
} from "./actionsTypes";

const initialState = {
  // TODO
  Allcountries: [],
  countries: [],
  //  GET ACTIVITIES
  activities: [],
  activity: "",
  //  ID
  country: [],
  //  FILTROS
  searchTerm: "",
  continentFilter: "",
  orderFilter: "",
  populationFilter: "",
  //  CARGADORES
  loadingCountries: false,
  loadingActivities: false,
  loadingCountriesFilter: false,
  //  PAGINADO
  currentPage: 1,
  indexOfLastElement: 10,
  // ACTIVITY_CREATED
  createdSuccessfully: false,

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
    case GET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
        loadingActivities: true,
      };
    case GET_COUNTRY:
      return { ...state, country: action.payload };
    case SEARCH_COUNTRIES:
      return { ...state, Allcountries: action.payload };
    case SET_SEARCH_TERM:
      return { ...state, searchTerm: action.payload };
    case SET_CONTINENT_FILTER:
      return { ...state, continentFilter: action.payload };
    case SET_ORDER_FILTER:
      return { ...state, orderFilter: action.payload, populationFilter: "" };
    case SET_POPULATION_FILTER:
      return { ...state, populationFilter: action.payload, orderFilter: "" };
    case SET_ACTIVITY_SELECT:
      return { ...state, activity: action.payload };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    case SET_TOTAL_PAGES:
      return { ...state, indexOfLastElement: action.payload };
    case COUNTRIES_FILTERED:
      return {
        ...state,
        countries: action.payload,
        loadingCountriesFilter: true,
      };
    case CREATE_ACTIVITY_SUCCESS:
      return { ...state, createdSuccessfully: action.payload };
    case FAILURE:
      return { ...state, error: action.error };
    default:
      return { ...state };
  }
};

export default rootReducer;
