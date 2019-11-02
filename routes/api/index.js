const router = require("express").Router();
const myExampleRoutes = require("./myExample");
const user = require("./user");

// Book routes (e.g. /api/example)
router.use("/example", myExampleRoutes);
router.use("/user", user);

module.exports = router;
