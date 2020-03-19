const axios = require("axios");

const api = {
  getUser(username) {
    const queryUrl = `https://api.github.com/users/${username}`;

    return axios.get(queryUrl).then(function (res) {
      return {
        avatar: res.data.avatar_url, 
        email: res.data.email
    }
  })
}
};
module.exports = api;
