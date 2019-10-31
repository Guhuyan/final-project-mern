const router = require("express").Router();
const myExampleRoutes = require("./myExample");
const nytRoute = require("./nyTimesApi");

// Book routes (e.g. /api/example)
// router.use("/example", myExampleRoutes);
router.use("/api", nytRoute);

module.exports = router;
