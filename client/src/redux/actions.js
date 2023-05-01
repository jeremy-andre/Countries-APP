import {
  FAILURE,
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
} from "./actionsTypes";
import axios from "axios";
//---------------------------------------

const url = "http://localhost:3001";

export const getCountries = () => {
  return async (dispatch) => {
    try {
      const apiData = await axios.get(`${url}/countries`);
      const countries = apiData.data;
      return dispatch({ type: GET_COUNTRIES, payload: countries });
    } catch (error) {
      console.log("error al obtener los paises", error);
      dispatch({ type: FAILURE, error });
    }
  };
};

export const getActivites = () => {
  return async (dispatch) => {
    try {
      const apiData = await axios.get(`${url}/activities`);
      const activities = apiData.data;
      return dispatch({ type: GET_ACTIVITIES, payload: activities });
    } catch (error) {
      console.log("error al obtener las actividades", error);
      dispatch({ type: FAILURE, error });
    }
  };
};

export const searchCountries = (query) => {
  return async (dispatch) => {
    const apiData = await axios.get(`${url}/countries?name=${query}`);
    const data = await apiData.data;
    if (Array.isArray(data))
      dispatch({ type: SEARCH_COUNTRIES, payload: data });
    else dispatch({ type: SEARCH_COUNTRIES, payload: [] });
  };
};

export const getCountry = (id) => {
  return async (dispatch) => {
    try {
      const apiData = await axios.get(`${url}/countries/${id}`);
      const country = apiData.data;
      return dispatch({ type: GET_COUNTRY, payload: country });
    } catch (error) {
      console.log("error al obtener el pais", error);
    }
  };
};

//--FILTERS-------------------------------------------------
export const setSearchTerm = (term) => {
  return { type: SET_SEARCH_TERM, payload: term };
};

export const setContinentFilter = (continent) => {
  return { type: SET_CONTINENT_FILTER, payload: continent };
};

export const setOrderFilter = (order) => {
  return { type: SET_ORDER_FILTER, payload: order };
};

export const setPopulationFilter = (population) => {
  return { type: SET_POPULATION_FILTER, payload: population };
};

export const setActivitySelect = (activity) => {
  return { type: SET_ACTIVITY_SELECT, payload: activity };
};
//------------------------------------------------------------

export const setcountriesFilter = (countriesFilter) => {
  return { type: COUNTRIES_FILTERED, payload: countriesFilter };
};

export const setCurrentPages = (currentPage) => {
  return { type: SET_CURRENT_PAGE, payload: currentPage };
};

export const setTotalPages = (totalPages) => {
  return { type: SET_TOTAL_PAGES, payload: totalPages };
};

//------------------------------------------------------------

export const createActivity = (form) => {
  return async (dispatch) => {
    try {
      await axios.post("http://localhost:3001/activities", form);
      alert("Creado exitosamente");
      dispatch({ type: CREATE_ACTIVITY_SUCCESS, payload: true });
    } catch (error) {
      dispatch({ type: FAILURE, payload: error.message });
    }
  };
};
