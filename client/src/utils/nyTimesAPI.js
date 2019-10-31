import axios from "axios";
require("dotenv");

const BASEURL = "/api/nyt?q=";
const SORTBASEURL = "&page=1&sort=newest&api-key=";
const APIKEY = process.env.NYTIMES_API_KEY;

// Export an object containing methods we'll use for accessing the API
export default {
  getArticle: function(query) {
    return axios.get(BASEURL + query);
  }
};
