const router = require("express").Router();
const nytRoutes = require("./nyTimesApi");

// Book routes (e.g. /api/example)
router.use("/nyt", nytRoutes);

module.exports = router;
