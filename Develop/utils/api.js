const api = {
  getUser(username) {
    const queryUrl = `https://api.github.com/users/${username}`;

    return axios.get(queryUrl).then(function (res) {
      return {
        avatar: res.avatar_url, 
        email: res.email
    })
  }
};

module.exports = api;
