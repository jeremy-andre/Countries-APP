const FilterCountries = (props) => {
  const { countries, continentFilter, orderFilter, populationFilter } = props;
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
//console.log(filteredCountries);
  return filteredCountries;
};

export default FilterCountries;
