var axios = require('axios');


module.exports = {
  fetchData: function(lang){
    var encodedData = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:' + lang + '&sort=stars&order=desc');

    return axios.get(encodedData).then(function(response){
        return response.data.items;
    })
  }
};
