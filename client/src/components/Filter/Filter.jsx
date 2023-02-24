import {
  setContinentFilter,
  setOrderFilter,
  setPopulationFilter,
  countriesFilter,
  getCountries,
} from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import SearchBar from "../SearchBar/SearchBar";
import { filterCountries } from "../../Utilities/filterCountries";
import { useEffect } from "react";

const Filter = () => {
  const continentFilter = useSelector((state) => state.continentFilter);
  const orderFilter = useSelector((state) => state.orderFilter);
  const populationFilter = useSelector((state) => state.populationFilter);
  const countries = useSelector((state) => state.countries);

  const dispatch = useDispatch();

  //--EL_QUE_FILTRA_LOS_COUNTRIES_CON_EL_UTILITY-----------------------
  const countriesFiltered = filterCountries({
    countries,
    continentFilter,
    orderFilter,
    populationFilter,
  });
  
    dispatch(countriesFilter(countriesFiltered))
   console.log(countriesFiltered.length);
  

  //console.log(countriesFiltered);

  //AQUI_HACER_UN_SWITCH-----------------------------------------------
  const handleFilterChange = (event) => {
    
    if (event.target.name === "continent") {
      dispatch(setContinentFilter(event.target.value));
    }
    if (event.target.name === "order") {
      dispatch(setOrderFilter(event.target.value));
    }
    if (event.target.name === "population") {
      dispatch(setPopulationFilter(event.target.value));
    }
  };

  return (
    <div>
      <SearchBar />

      <div>
        <label>CONTINENT: </label>
        <select
          value={continentFilter}
          onChange={handleFilterChange}
          name="continent"
        >
          <option value="">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

      <div>
        <label>ORDER: </label>
        <select value={orderFilter} onChange={handleFilterChange} name="order">
          <option value="">None</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
      </div>

      <div>
        <label>POPULATION: </label>
        <select
          value={populationFilter}
          onChange={handleFilterChange}
          name="population"
        >
          <option value="">None</option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
      </div>

      <div>
        <label>Activities: </label>
      </div>
    </div>
  );
};

export default Filter;
