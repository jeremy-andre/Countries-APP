import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, getActivites } from "../../redux/actions";
import styles from "../Home/Home.module.css";

import CardsContainer from "../../components/CardsContainer/CardsContainer";
import Filter from "../../components/Filter/Filter";
import Pagination from "../../components/Pagination/Pagination";
import {
  countriesByPage,
  FilterCountries,
} from "../../Utilities/FilterCountries";
//import FilterCountries from "../../Utilities/FilterCountries";

//--RECIEN_COLOCADO--------------------------------------------
// import { useState } from "react";
//-----------------------------------------------------------
const Home = () => {
  // --GET DATAS DE LAS STORE O ESTADOS------------------------
  const countries = useSelector((state) => state.Allcountries);
  const continentFilter = useSelector((state) => state.continentFilter);
  const orderFilter = useSelector((state) => state.orderFilter);
  const populationFilter = useSelector((state) => state.populationFilter);
  const activityFilter = useSelector((state) => state.activity);
  const currentPage = useSelector((state) => state.currentPage);

  //-- FUNCION QUE FILTRA SEGUN VAYA CAMBIANDO EL ESTADO DE LOS FILTROS--
  const countriesFiltered = FilterCountries({
    countries,
    continentFilter,
    orderFilter,
    populationFilter,
    activityFilter,
  });

  const finishCountries = countriesByPage({ countriesFiltered, currentPage });

  // DISPATCH A LA API PARA QUE CARGUE LOS COUNTRIES-A---------------
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivites());
  }, [dispatch]);

  return (
    <div className={styles.home}>
      <Filter />
      <Pagination countriesFiltered={countriesFiltered} />
      <CardsContainer finishCountries={finishCountries} />
    </div>
  );
};

export default Home;
