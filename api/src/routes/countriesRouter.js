const {
  getCountriesHandler,
  getCountryHandler,
} = require("../handlers/countriesHandlers");

const { Router } = require("express");
const countriesRouter = Router();

countriesRouter.get("/", getCountriesHandler);
countriesRouter.get("/:idPais", getCountryHandler);

module.exports = countriesRouter;
