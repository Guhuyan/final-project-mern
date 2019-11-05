import axios from "axios";

export default {
  getUserLogin: function(query) {
    return axios.get("/api/user/login", { params: { q: query } });
  }
};
