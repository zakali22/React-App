var React = require('react');
var api = require('../utils/api');
var queryString = require('query-string');
var Link = require('react-router-dom').Link;
var Profile = require('./Profile');
var loadingTag = {
  color: 'coral',
  textAlign: 'center',
  marginTop: '30px',
  fontSize: '30px'
};
var loser = {
  color: 'red'
};
var winner = {
  color: 'green'
};

class ImageTextResult extends React.Component {
  render(){
    var profile = this.props.info.profile;
    return (
      <Profile
        image={profile.avatar_url}
        name={profile.login}>
            <ul className='resultListing'>
              {profile.name && <li><span>Name</span>: {profile.name}</li>}
              {profile.location && <li><span>Location</span>: {profile.location}</li>}
              {profile.company && <li><span>Company</span>: {profile.company}</li>}
              <li><span>Followers</span>: {profile.followers}</li>
              <li><span>Following</span>: {profile.following}</li>
              <li><span>Public Repos</span>: {profile.public_repos}</li>
            </ul>
      </Profile>
    )
  }
}


class PlayerResult extends React.Component {
  render(){
    console.log(this.props.profile);
    return (
      <div className='form'>
        <h1
          style={this.props.title === 'Winner' ? winner : loser}>
          {this.props.title}
        </h1>
        <h3>Score: {this.props.score}</h3>
        <ImageTextResult info={this.props.profile}/>
      </div>
    )
  }
}



class Results extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      winner: null,
      loser: null,
      error: null,
      loading: true
    };
  }
  componentDidMount(){
    var players = queryString.parse(this.props.location.search);
    api.battle([
      players.playerOneName,
      players.playerTwoName
    ]).then(function (results) {
      // if there is an error
      console.log(results)
        if(results === null){
          return this.setState(function(){
            return {
              error: 'There seems to be a problem. Please check if users exist',
              loading: false
            }
          });
        }
        // if no error
        this.setState(function(){
          return {
            error: null,
            winner: results[0],
            loser: results[1],
            loading: false
          }
        })
    }.bind(this));
  }

  render(){
    var winner = this.state.winner;
    var loser = this.state.loser;
    var error = this.state.error;
    var loading = this.state.loading;

    if(loading === true){
      return <p style={loadingTag}>Loading...</p>
    }

    if(error){
      return (
        <div>
          <p style={loadingTag}>{error}</p>
          <Link to='/battle' className="battleButton">Rebattle</Link>
        </div>
      )
    }

    return (
      <div className='row'>
        <PlayerResult title='Winner' profile={winner} score={winner.score}/>
        <PlayerResult title='Loser' profile={loser} score={loser.score}/>
      </div>
    )
  }
}

module.exports = Results;
