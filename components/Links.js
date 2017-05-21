var React = require('react');
var Link = require('react-router-dom').Link;
var NavLink = require('react-router-dom').NavLink;

class Links extends React.Component {
  render(){
    return (
      <ul className="navigation">
        <li>
          <NavLink exact activeClassName="active" to='/'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to='/battle'>
            Battle
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to='/popular'>
            Popular
          </NavLink>
        </li>
      </ul>
    )
  }
}

module.exports = Links;
