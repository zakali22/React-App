var React = require('react');

class NotFound extends React.Component {
  render(){
    return (
      <div className="error">
        <h1>Ooooops!</h1>
        <h3>The page you are looking for does not exist in the digital universe <span>:(</span></h3>
      </div>
    )
  }
}

module.exports = NotFound;
