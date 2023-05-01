const { Activity, Country } = require("../db");

const createActivity = async (
  idPais,
  name,
  difficulty,
  duracion,
  temporada
) => {
  const activityCreated = await Activity.create({
    name,
    difficulty,
    duracion,
    temporada,
  });

  await Promise.all(
    idPais.map(async (id) => {
      // Busca el Pais mediante el body idPais para colocar la actividad created
      const country = await Country.findByPk(id);
      // Mete la actividad creada al Pais
      await activityCreated.addCountry(country);
    })
  );

  return activityCreated;
};

//LLAMA A TODAS LAS ACTIVIDADES
const allAct = async () => {
  return await Activity.findAll();
};

module.exports = {
  createActivity,
  allAct,
};
