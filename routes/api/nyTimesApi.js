const axios = require("axios");
const router = require("express").Router();
require("dotenv");

router.route("/").get(function(req, res) {
  let q = req.query.q;
  const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=";
  const SUBURL = "&page=1&sort=newest&api-key=";
  const APIKEY = process.env.NYTIMES_API_KEY;

  console.log(BASEURL + q + SUBURL + APIKEY);
  axios
    .get(BASEURL + q + SUBURL + APIKEY)
    .then(response => {
      console.log(response.data.response);
      res.json(response.data.response);
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    });
});
module.exports = router;
