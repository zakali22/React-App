var React = require('react');


class Profile extends React.Component {
  render(){
    return (
      <div>
        <div className="form">
          <img
            className="avatar"
            src={this.props.image}
          />
          <h1>@{this.props.name}</h1>
          {this.props.children}
        </div>
      </div>
    )
  }
}

module.exports = Profile;
