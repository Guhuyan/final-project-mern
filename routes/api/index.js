const router = require("express").Router();
const user = require("./user");
const nytRoutes = require("./nyTimesApi");
const stock = require("./stocksApi");

// Routes
router.use("/nyt", nytRoutes);
router.use("/user", user);
router.use("/stock", stock);

module.exports = router;
