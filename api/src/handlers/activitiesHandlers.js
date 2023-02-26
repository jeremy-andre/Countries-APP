const {
  createActivity,
  allAct,
} = require("../controllers/activitiesControllers");

const getActivitiesHandler = async (req, res) => {
  try {
    const allActivities = await allAct();
    if (allActivities.length === 0) {
      throw Error("No existen actividades creadas");
    } else {
      res.status(200).json(allActivities);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createActivitieHandler = async (req, res) => {
  try {
    const { idPais, name, difficulty, duracion, temporada } = req.body;
    if (!idPais || !name || !difficulty || !temporada) throw Error("Data_missing");
    else {
      const newActivity = await createActivity(
        idPais,
        name,
        difficulty,
        duracion,
        temporada
      );
      res.status(200).json(newActivity);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getActivitiesHandler,
  createActivitieHandler,
};
