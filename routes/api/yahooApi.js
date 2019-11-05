const axios = require("axios");
const router = require("express").Router();
require("dotenv");

router.route("/").get(function(req, res) {
  var config = {
    headers: {
      "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
      "x-rapidapi-key": process.env.RAPIDAPI_KEY
    },
    params: {
      lang: "en",
      region: "US",
      query: req.query.q
    }
  };

  axios
    .get(
      "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/auto-complete",
      config
    )
    .then(response => {
      console.log(response.data);
      res.json(response.data);
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    });
});
module.exports = router;
