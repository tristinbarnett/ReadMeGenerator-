const axios = require("axios");

const api = {
  getUser(username) {
    const header = { headers: { Authorization: `token daebc2bc9436006693c228799e3e77e9c12585a5` } };
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
