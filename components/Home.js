var React = require('react');
var Link = require('react-router-dom').Link;
var ReWrite = require('react-rotating-text');

class Home extends React.Component {
  render(){
    return (
      <div className="homepage">
        <h1>Explore and compare popular Github <span><ReWrite cursor={false} typingInterval={60} items={['repositories', 'users']}/></span></h1>
        <Link to='/battle' className="button">
          Compare
        </Link>
      </div>
    )
  }
}

module.exports = Home;
