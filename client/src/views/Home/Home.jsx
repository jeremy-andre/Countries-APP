import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../redux/actions";

import Filter from "../../components/Filter/Filter";
import Pagination from "../../components/Pagination/Pagination";
import FilterCountries from "../../Utilities/FilterCountries";

//--RECIEN_COLOCADO--------------------------------------------
// import { useState } from "react";
//-----------------------------------------------------------
const Home = () => {
  const countries = useSelector((state) => state.Allcountries);
  const continentFilter = useSelector((state) => state.continentFilter);
  const orderFilter = useSelector((state) => state.orderFilter);
  const populationFilter = useSelector((state) => state.populationFilter);

  const countriesFiltered = FilterCountries({
    countries,
    continentFilter,
    orderFilter,
    populationFilter,
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <div>
      <div>Home</div>
      <Pagination countriesFiltered={countriesFiltered} />
      <Filter />
    </div>
  );
};

export default Home;
