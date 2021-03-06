var React = require('react');
var DisplayLang = require('./DisplayLang');
var RepoGrid = require('./RepoGrid');
var Loading = require('./Loading');
var api = require('../utils/api');
// This file contains a container component which
// sets initial states and changes them and sends props to
// the presentational component DisplayLang


class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentLang: 'All',
      repos: null,
    };
    this.changeLanguage = this.changeLanguage.bind(this);
  }

  componentDidMount(){
    this.changeLanguage(this.state.currentLang);
  }

  changeLanguage(language){
    this.setState(function(){
        return {
          currentLang: language,
          repos: null,
        }
    });
    api.fetchData(language)
    .then(function(response){
      this.setState(function(){
        return {
          repos: response
        }
      })
    }.bind(this));
  }

  render(){
    return (
      <div>
        <DisplayLang
          currentLang={this.state.currentLang}
          changeLanguage={this.changeLanguage}
        />
        {!this.state.repos
          ? <Loading/> :
          <RepoGrid repos={this.state.repos} />
        }
      </div>
    )
  }
}

module.exports = Navbar;
