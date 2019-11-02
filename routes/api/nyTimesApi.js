// import axios from "axios";
const router = require("express").Router();
require("dotenv");

router.route("/").get(function(req, res) {
  let q = req.query.q;
  const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=";
  const SUBURL = "&page=1&sort=newest&api-key=";
  const APIKEY = process.env.NYTIMES_API_KEY;
  res.json({ test: BASEURL + q + SUBURL + APIKEY });
});
module.exports = router;
