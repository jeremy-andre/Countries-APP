import { useDispatch, useSelector } from "react-redux";
import { setcountriesFilter } from "../redux/actions";

const FilterCountries = () => {
  const continentFilter = useSelector((state) => state.continentFilter);
  const orderFilter = useSelector((state) => state.orderFilter);
  const populationFilter = useSelector((state) => state.populationFilter);
  const countries = useSelector((state) => state.countries);

  //const { countries, continentFilter, orderFilter, populationFilter } = props;
  //--aplicar_filtro_por_continent------------
  let filteredCountries = countries.filter((country) => {
    if (continentFilter === "") {
      return true;
    } else {
      return country.continent === continentFilter;
    }
  });

  //--aplicar_filtro_por_order----------------
  switch (orderFilter) {
    case "A-Z":
      filteredCountries.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "Z-A":
      filteredCountries.sort((a, b) => b.name.localeCompare(a.name));
      break;
    default:
      break;
  }
  //--aplicar_filtro_por_population-----------
  switch (populationFilter) {
    case "Ascendente":
      filteredCountries.sort((a, b) => b.population - a.population);
      break;
    case "Descendente":
      filteredCountries.sort((a, b) => a.population - b.population);
      break;
    default:
      break;
  }
  filteredCountries()
  console.log(filteredCountries);
  const dispatch = useDispatch();
  dispatch(setcountriesFilter(filteredCountries));
  return null;
};

export default FilterCountries;
