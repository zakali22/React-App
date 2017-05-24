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
    var newState = {};
    this.setState(function(){
        newState[playerId + 'Name'] = name,
        newState[playerId + 'Image'] = 'https://github.com' + name + '.png?size=200'

        return newState;
    })
  }

  render(){
    return (
      <div>
        <div className="row">
          <PlayerForm
            id={this.state.playerOneName}
            label='Player One'
            onSubmit={this.submitChange}
          />

          <PlayerForm
            id={this.state.playerTwoName}
            label='Player Two'
            onSubmit={this.submitChange}
          />
        </div>
      </div>
    )
  }
}

module.exports = Battle;
