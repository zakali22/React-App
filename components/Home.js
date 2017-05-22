var React = require('react');
var Link = require('react-router-dom').Link;
var Rewrite = require('react-rotating-text');

class Home extends React.Component {
  render(){
    return (
      <div className="homepage">
        <h1>Explore and <Rewrite cursor={false} typingInterval={190} items={['compare', 'battle']}/> Github repositories</h1>
        <Link to='/battle' className="button">
          Compare
        </Link>
      </div>
    )
  }
}

module.exports = Home;
