var React = require('react');
var PropTypes = require('prop-types');
var Navbar = require('./Navbar');

// This file contains a presentational component which only
// takes in props from a NavBar component and renders it to the view
var  langList = ['All','Javascript','Python','Ruby','Java','CSS','PHP'];

function DisplayLang(props){
  return (
    <div>
      <ul className="lists">
        {langList.map(function(langItem){
          return (
            <li
              style={langItem === props.currentLang ? {color: 'coral'} : null}
              onClick={props.changeLanguage.bind(null, langItem)}
              key={langItem}>
            {langItem}</li>
          )
        }, this)}
      </ul>
    </div>
  )
}

DisplayLang.propTypes = {
  currentLang: PropTypes.string.isRequired,
  changeLanguage: PropTypes.func.isRequired
};



module.exports = DisplayLang;
