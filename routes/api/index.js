const router = require("express").Router();
const user = require("./user");
const nytRoutes = require("./nyTimesApi");

// Routes
router.use("/nyt", nytRoutes);
router.use("/user", user);

module.exports = router;
