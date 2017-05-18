var React = require('react');

class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentLang: 'All'
    };
  }
  changeLang(language){
    this.setState = {
      currentLang: language
    };
  }
  render(){
    var languages = ['All', 'Javascript', 'Ruby', 'Python', 'Java', 'PHP'];
    return (
      <ul className="lists">
        {languages.map(function(lang){
          return (
            <li
              onClick={this.changeLang(lang)}
            >{lang}</li>
          )
        }, this)}
      </ul>
    )
  }
}

module.exports = NavBar;
