const { Op } = require("sequelize");
const { Country, Activity } = require("../db");

const allCountries = async () => {
  return await Country.findAll();
};

const searchCountryByName = async (name) => {
  const searchQuery = await Country.findAll({
    where: { name: { [Op.iLike]: `%${name}%` } },
  });
  if (!searchQuery.length) return `There is no country with ${name}`;
  else return searchQuery;
};

const getCountryById = async (idPais) => {
  return await Country.findByPk(idPais, {
    include: {
      model: Activity,
      attributes: ["id", "name", "difficulty", "duracion", "temporada"],
    },
  });
};

module.exports = {
  allCountries,
  getCountryById,
  searchCountryByName,
};
