const countriesRouter = require("./countriesRouter");
const activitiesRouter = require("./activitiesRouter");
const { Router } = require("express");

const router = Router();

router.use("/countries", countriesRouter);
router.use("/activities", activitiesRouter);

module.exports = router;
