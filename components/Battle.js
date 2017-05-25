var React = require('react');
var PlayerForm = require('./Playerform');

class Battle extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      playerOneName: '',
      playerTwoName: '',
      playerOneImage: null,
      playerTwoImage: null
    };

    this.submitChange = this.submitChange.bind(this);
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
              image={playerOneName}
              name={playerOneName}
              id='playerOne'
            />
          }
          {!playerTwoName &&
            <PlayerForm
              id= 'playerTwo'
              label='Player Two'
              onSubmit={this.submitChange}
            />
          }
        </div>
      </div>
    )
  }
}

module.exports = Battle;
