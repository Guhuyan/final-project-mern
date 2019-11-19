const axios = require("axios");
const router = require("express").Router();
require("dotenv");

router.route("/").get(function(req, res) {
  let q = req.query.q;
  const BASEURL =
    "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=";
  const SUBURL = "&interval=5min&apikey=";
  const APIKEY = process.env.ALPHAVANTAGE_API_KEY;

  console.log(BASEURL + q + SUBURL + APIKEY);
  axios
    .get(BASEURL + q + SUBURL + APIKEY)
    .then(response => {
      //console.log(response.data);
      res.json(response.data);
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    });
});
module.exports = router;
