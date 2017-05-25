var React = require('react');
var PropTypes = require('prop-types');

class PlayerForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: ''
    };

    this.typeBinding = this.typeBinding.bind(this);
    this.submittingChange = this.submittingChange.bind(this);
  }

  typeBinding(event){
    var value = event.target.value;
    this.setState(function(){
      return {
        name: value
      }
    })
  }

  submittingChange(event){
    event.preventDefault();
    this.props.onSubmit(this.props.id,this.state.name);
  }

  render(){
    return (
      <div>
        <form className="form" onSubmit={this.submittingChange}>
          <label htmlFor='username'>
            {this.props.label}
          </label>
          <input
            type='text'
            placeholder='github username'
            id='username'
            value={this.state.name}
            onChange={this.typeBinding}
          />
          <button
            type='submit'
            disabled={!this.state.name}>
            Submit
          </button>
        </form>
      </div>
    )
  }
}

PlayerForm.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};

module.exports = PlayerForm;
