const {
  getActivitiesHandler,
  createActivitieHandler,
} = require("../handlers/activitiesHandlers");

const { Router } = require("express");
const activitiesRouter = Router();

activitiesRouter.get("/", getActivitiesHandler);
activitiesRouter.post("/", createActivitieHandler);

module.exports = activitiesRouter;
