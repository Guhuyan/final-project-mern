import axios from "axios";
require("dotenv");

const BASEURL = "/api/yahoo?q=";

// Export an object containing methods we'll use for accessing the API
export default {
  getSymbol: function(query) {
    return axios.get(BASEURL + query);
  }
};
