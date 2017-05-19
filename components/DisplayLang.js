var React = require('react');
var PropTypes = require('prop-types');

// This file contains a presentational component which only
// takes in props from a NavBar component and renders it to the view

class DisplayLang extends React.Component {
  render(){
    var langList = ['All','Javascript','Ruby','CSS','Python','Java', 'PHP'];
    return (
      <div>
        <ul className="lists">
          {langList.map(function(langItem){
            return (
              <li
                style={langItem === this.props.currentLang ? {color: 'coral'} : null}
                onClick={this.props.changeLanguage.bind(null, langItem)}
                key={langItem}>
              {langItem}</li>
            )
          }, this)}
        </ul>
      </div>
    )
  }
}


module.exports = DisplayLang;
