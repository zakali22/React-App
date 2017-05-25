var React = require('react');
var PropTypes = require(''prop-types);

class Profile extends React.Component {
  render(){
    return (
      <div>
        <img
          className="avatar"
          src={this.props.image}
        />
        <h1>@{this.props.name}</h1>
        <button className="reset"
          onClick={this.onReset.bind(null, this.props.id)}>
            Reset
        </button>
      </div>
    )
  }
}

Profile.propTypes = {
  image: ''
};
