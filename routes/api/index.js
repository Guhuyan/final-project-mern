const router = require("express").Router();
const myExampleRoutes = require("./myExample");

// Book routes (e.g. /api/example)
router.use("/example", myExampleRoutes);

module.exports = router;
