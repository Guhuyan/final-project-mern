const axios = require("axios");
const router = require("express").Router();
// const Search = require("./searchBySymbol");
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
      // let company = await Search(symbol);
      // console.log("The following is the company.");
      // console.log(company);
      // router.route("/").get(searchSymbol(req, res));
      // res.json(response.data);
    })
    .then(response => {
      //console.log(response);
      res.json(response);
    })
    .catch(function(error) {
      // handle error
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
        //console.log(response.data);
        return response.data;
        //res.json(response.data);
        // res.send(response);
      })
      .catch(error => {
        return error;
        // res.send(error);
      });
  }
}
module.exports = router;
