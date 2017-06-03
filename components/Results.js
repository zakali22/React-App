var React = require('react');
var api = require('../utils/api');
var queryString = require('query-string');

class Results extends React.Component {
  componentDidMount(){
    var players = queryString.parse(this.props.location.search);
    api.battle([
      players.playerOneName,
      players.playerTwoName
    ]).then(function (results) {
        console.log(results);
    });
  }

  render(){
    return (
      <div>
        <h1>Results</h1>
      </div>
    )
  }
}

module.exports = Results;
