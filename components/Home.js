var React = require('react');
var Link = require('react-router-dom').Link;
var Rewrite = require('react-rotating-text');

class Home extends React.Component {
  render(){
    return (
      <div className="homepage">
        <h1><span><Rewrite cursor={false} typingInterval={120} items={['Explore', 'Discover', 'Compare', 'Battle']}/></span> the most popular Github repositories</h1>
        <Link to='/battle' className="button">
          Compare
        </Link>
      </div>
    )
  }
}

module.exports = Home;
