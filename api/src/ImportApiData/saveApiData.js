const getApiData = require("./helper/getApiData");
const { Country } = require("../db");

const saveApiData = async (res, req) => {
  try {
    const allcountries = await getApiData();
    await Country.bulkCreate(allcountries);
    
  } catch (error) {
    //res.json({ error: error.message });
  }
};

module.exports = saveApiData;
