import {
  FAILURE,
  GET_COUNTRIES,
  GET_COUNTRY,
  SEARCH_COUNTRIES,
  SET_CONTINENT_FILTER,
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

export const setContinentFilter = (continent) => {
  return { type: SET_CONTINENT_FILTER, payload: continent };
};



