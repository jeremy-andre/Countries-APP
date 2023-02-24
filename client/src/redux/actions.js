import {
  FAILURE,
  GET_COUNTRIES,
  GET_COUNTRY,
  SEARCH_COUNTRIES,
  SET_CONTINENT_FILTER,
  SET_ORDER_FILTER,
  SET_POPULATION_FILTER,
  SET_CURRENT_PAGE,
  SET_TOTAL_PAGES,
  COUNTRIES_FILTERED,
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

export const searchCountries = (query) => {
  return async (dispatch) => {
    const apiData = await axios.get(`${url}/countries?name=${query}`);
    const data = await apiData.data;
    dispatch({ type: SEARCH_COUNTRIES, payload: data });
  };
};

export const getCountry = (id) => {
  return async (dispatch) => {
    try {
      const apiData = await axios.get(`${url}/countries/${id}`);
      const country = apiData.data;
      dispatch({ type: GET_COUNTRY, payload: country });
    } catch (error) {
      console.log("error al obtener el pais", error);
    }
  };
};

//--FILTERS--------------------------------------------------
export const setContinentFilter = (continent) => {
  return { type: SET_CONTINENT_FILTER, payload: continent };
};

export const setOrderFilter = (order) => {
  return { type: SET_ORDER_FILTER, payload: order };
};

export const setPopulationFilter = (population) => {
  return { type: SET_POPULATION_FILTER, payload: population };
};

//------------------------------------------------------------

export const setcountriesFilter = (countriesFilter) => {
  return { type: COUNTRIES_FILTERED, payload: countriesFilter };
};

export const setCurrentPage = (currentPage) => {
  return { type: SET_CURRENT_PAGE, payload: currentPage };
};

export const setTotalPages = (totalPages) => {
  return { type: SET_TOTAL_PAGES, payload: totalPages };
};
