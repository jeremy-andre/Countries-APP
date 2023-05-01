export const FilterCountries = (props) => {
  const {
    countries,
    continentFilter,
    orderFilter,
    populationFilter,
    activityFilter,
  } = props;

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

  if (activityFilter) {
    filteredCountries = filteredCountries.filter(
      (country) =>
        country.activities &&
        country.activities.find((a) => a.name === activityFilter)
    );
  }

  // console.log(filteredCountries);
  return filteredCountries;
};

export const countriesByPage = (props) => {
  const { countriesFiltered, currentPage } = props;
  // Calcula el índice de inicio y final de los países de la página actual
  const start = (currentPage - 1) * 10;
  const end = start + 10;

  const currentCountries = countriesFiltered.slice(start, end);
  return currentCountries;
};
