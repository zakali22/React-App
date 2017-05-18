var React = require('react');

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
    var langList = ['All','Javascript','Ruby','CSS','Python','Java', 'PHP'];
    return (
      <div>
        <ul className="lists">
          {langList.map(function(langItem){
            return (
              <li
                style={langItem === this.state.currentLang ? {color: 'coral'} : null}
                onClick={this.changeLanguage.bind(null, langItem)}
                key={langItem}>
              {langItem}</li>
            )
          }, this)}
        </ul>
      </div>
    )
  }
}

module.exports = NavBar;
