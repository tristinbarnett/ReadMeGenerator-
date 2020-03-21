const axios = require("axios");
const token = require("./token");

const api = {
  getUser(username) {
    const header = { headers: { Authorization: token } };
    const queryUrl = `https://api.github.com/users/${username}`;

    return axios.get(queryUrl, header).then(function (res) {
      return {
        avatar: res.data.avatar_url,
        email: res.data.email
      }
    })
  }
};
module.exports = api;
