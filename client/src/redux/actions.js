import {
  GET_COUNTRIES,
  GET_COUNTRY,
  SEARCH_COUNTRIES,
  SET_CONTINENT_FILTER,
} from "./actionsTypes";

import axios from "axios";

export const getCountries = () => {
  return async (dispatch) => {
    const apiData = await axios.get("http://localhost:3001/countries");
    const countries = apiData.data;
    dispatch({ type: GET_COUNTRIES, payload: countries });
  };
};

export const getCountry = (id) => {
  return async (dispatch) => {
    const apiData = await axios.get(`http://localhost:3001/countries/${id}`);
    const country = apiData.data;
    dispatch({ type: GET_COUNTRY, payload: country });
  };
};

export const searchCountries = (query) => {
  return async (dispatch) => {
    const apiData = await axios.get(
      `http://localhost:3001/countries?name=${query}`
    );
    const data = await apiData.data;
    dispatch({ type: SEARCH_COUNTRIES, payload: data });
  };
};

export const setContinentFilter = (continent) => {
  return { type: SET_CONTINENT_FILTER, payload: continent };
};
