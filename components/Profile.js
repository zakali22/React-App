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
          <button className="reset"
              onClick={this.props.onReset.bind(null, this.props.id)}>
              Reset
          </button>
        </div>
      </div>
    )
  }
}

module.exports = Profile;
