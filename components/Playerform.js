var React = require('react');

class PlayerForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: ''
    };
  }

  typeBinding(event){
    this.setState(function(){
      return {
        name: event.target.value
      };
    })
  }

  submittingChange(){
    this.props.onSubmit(
      this.props.id,
      this.state.name
    );
  }

  render(){
    return (
      <form className="form" onSubmit={this.submittingChange}>
        <label htmlFor='username'>
          {this.props.label}
        </label>
        <input
          id='username'
          value={this.state.name}
          onChange={this.typeBinding}
        />
        <button type='submit'>
          Submit
        </button>
      </form>
    )
  }
}

module.exports = PlayerForm;
