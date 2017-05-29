var axios = require('axios');

var clientID = '5e72fcc8c9cdeaa5de2a';
var secretID = 'eadc203e71f8aa11aaad1e541d6c2b3472ccd9fb';
var params = '?client_id=' + client_id + '&client_secret=' + secretID;

function getProfile(username){
  return axios.get('https://github.com/users/' + username + params)
    .then(function(user){
      return user.data;
    });
}

function getRepos(username){
  return axios.get('https://github.com/users/' + username + '/repos' + params + '&per-page=100')
    .then(function(user){
      return user.data;
    });
}



function getStars(repos){
  return repos.data.reduce(function(count, repo){
    return count + repo.stargazers_count;
  }, 0)
}




module.exports = {

  fetchData: function(lang){
    var encodedData = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:' + lang
    + '&sort=stars&order=desc');

    return axios.get(encodedData).then(function(response){
        return response.data.items;
    })
  }
};
