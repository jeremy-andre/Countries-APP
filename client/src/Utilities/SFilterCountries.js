export const selectFilteredCountries = (state) => {
    const { countries, continentFilter } = state;
    if (!continentFilter) {
      return countries;
    }
    return countries.filter((country) => country.continent === continentFilter);
  };