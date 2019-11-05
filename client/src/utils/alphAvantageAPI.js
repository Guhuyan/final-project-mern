import axios from "axios";
require("dotenv");

const BASEURL = "/api/stock?q=";

// Export an object containing methods we'll use for accessing the API
export default {
  getStock: function(query) {
    return axios.get(BASEURL + query);
  }
};
