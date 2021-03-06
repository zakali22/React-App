var React = require('react');
var PlayerForm = require('./Playerform');
var Profile = require('./Profile');
var Link = require('react-router-dom').Link;

class Battle extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      playerOneName: '',
      playerTwoName: '',
      playerOneImage: null,
      playerTwoImage: null
    };
    this.reset = this.reset.bind(this);
    this.submitChange = this.submitChange.bind(this);
  }

  reset(playerId){
    this.setState(function(){
        var newState = {};
        newState[playerId + 'Name'] = '',
        newState[playerId + 'Image'] = null

        return newState;
    });
  }

  submitChange(playerId, name){
    this.setState(function(){
        var newState = {};
        newState[playerId + 'Name'] = name,
        newState[playerId + 'Image'] = 'https://github.com/' + name + '.png?size=200'

        return newState;
    });
  }

  render(){
    var match = this.props.match;
    var playerOneName = this.state.playerOneName;
    var playerTwoName = this.state.playerTwoName;
    var playerOneImage = this.state.playerOneImage;
    var playerTwoImage = this.state.playerTwoImage;

    return (
      <div>
        <div className="row">
          {!playerOneName &&
            <PlayerForm
              id= 'playerOne'
              label='Player One'
              onSubmit={this.submitChange}
            />
          }
          {playerOneImage !== null &&
            <Profile
              image={playerOneImage}
              name={playerOneName}>
                  <button className="reset"
                      onClick={this.reset.bind(null, 'playerOne')}>
                      Reset
                  </button>
            </Profile>
          }
          {!playerTwoName &&
            <PlayerForm
              id= 'playerTwo'
              label='Player Two'
              onSubmit={this.submitChange}
            />
          }
          {playerTwoImage !== null &&
            <Profile
              image={playerTwoImage}
              name={playerTwoName}>
                  <button className="reset"
                      onClick={this.reset.bind(null, 'playerTwo')}>
                      Reset
                  </button>
            </Profile>
          }
        </div>
        <div className="renderButton">
          {
            playerOneName && playerTwoName &&
                <Link
                  to={{
                    pathname: match.url + '/results',
                    search: '?playerOneName=' + playerOneName + '&playerTwoName=' + playerTwoName
                  }}
                >
                  <button className="battleButton">
                    Battle
                  </button>
              </Link>
          }
        </div>
      </div>
    )
  }
}

module.exports = Battle;
