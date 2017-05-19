var React = require('react');
var DisplayLang = require('./DisplayLang');

// This file contains a container component which
// sets initial states and changes them and sends props to
// the presentational component DisplayLang

class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentLang: 'All',
    };
    this.changeLanguage = this.changeLanguage.bind(this);
  }
  changeLanguage(language){
    this.setState(function(){
        return {
          currentLang: language,
        }
    });
  }

  render(){
    return (
      <DisplayLang
        currentLang={this.state.currentLang}
        changeLanguage={this.changeLanguage}
      />
    )
  }
}

module.exports = NavBar;
