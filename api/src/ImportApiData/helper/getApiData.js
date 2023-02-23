const axios = require("axios");

const getApiData = async () => {
  const apiData = await axios(`https://restcountries.com/v3/all`);

  return (allApiDataCountries = apiData.data.map((country) => {
    return {
      id: country.cca3,
      name: country.name.common,
      image: country.flags[0],
      continent: country.region,
      capital: country.capital ? country.capital[0] : "Does not exist",
      subregion: country.subregion ? country.subregion : "Does not exist",
      area: country.area ? country.area : "Does not exist",
      population: country.population,
    };
  }));

  //return allApiDataCountries;
};

module.exports = getApiData;
