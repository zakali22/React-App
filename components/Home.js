var React = require('react');
var Link = require('react-router-dom').Link;

class Home extends React.Component {
  render(){
    return (
      <div className="homepage">
        <h1>Explore and compare Github repositories</h1>
        <Link to='/battle' className="button">
          Compete
        </Link>
      </div>
    )
  }
}

module.exports = Home;
