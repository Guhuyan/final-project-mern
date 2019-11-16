const axios = require("axios");
const router = require("express").Router();
require("dotenv");

router.get("/", function(req, res) {
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

  return axios
    .get(
      "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/auto-complete",
      config
    )
    .then(response => {
      let symbol = response.data.ResultSet.Result[0].symbol;
      console.log(symbol);
      return searchSymbol(symbol);
    })
    .then(response => {
      res.json(response);
    })
    .catch(function(error) {
      console.log(error);
    });
});

function searchSymbol(req, res) {
  {
    var configs = {
      headers: {
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
        "x-rapidapi-key": process.env.RAPIDAPI_KEY
      },
      params: {
        lang: "en",
        region: "US",
        symbol: req
      }
    };

    return axios
      .get(
        "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/get-detail",
        configs
      )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        return error;
      });
  }
}
module.exports = router;
