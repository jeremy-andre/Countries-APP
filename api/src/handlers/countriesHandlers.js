const {
  allCountries,
  getCountryById,
  searchCountryByName,
} = require("../controllers/countriesControllers");

const getCountriesHandler = async (req, res) => {
  try {
    const { name } = req.query;

    const results = name
      ? await searchCountryByName(name)
      : await allCountries();
      
    res.status(200).json(results);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getCountryHandler = async (req, res) => {
  try {
    const { idPais } = req.params;
    const getCountry = await getCountryById(idPais);
    getCountry
      ? res.status(200).json(getCountry)
      : res.status(404).json("NOT FOUND 404");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getCountriesHandler,
  getCountryHandler,
};
