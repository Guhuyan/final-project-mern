const router = require("express").Router();
const user = require("./user");
const nytRoutes = require("./nyTimesApi");
const stock = require("./stocksApi");
const yahoo = require("./yahooApi");

// Routes
router.use("/nyt", nytRoutes);
router.use("/user", user);
router.use("/stock", stock);
router.use("/yahoo", yahoo);

module.exports = router;
