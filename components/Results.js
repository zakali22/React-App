var React = require('react');
var api = require('../utils/api');
var queryString = require('query-string');

class Results extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      winner: null,
      loser: null,
      error: null,
      loading: true
    };
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
