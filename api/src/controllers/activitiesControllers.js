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
  // Busca el Pais mediante el body idPais para colocar la actividad created
  const pushCountry = await Country.findOne({
    where: { id: idPais },
  });
  // Mete la actividad creada al Pais
  await activityCreated.addCountry(pushCountry);
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
