var React = require('react');
var loadingTag = {
  color: 'coral',
  textAlign: 'center',
  marginTop: '30px',
  fontSize: '30px'
};

class Loading extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      text: props.text
    };
  }
  componentDidMount(){
    var stop = this.props.text + '...';
    this.interval = window.setInterval(function() {
      if(this.state.text === stop){
        this.setState(function(){
          return {
            text: this.props.text
          }
        })
      } else {
        this.setState(function(prevState){
          return {
            text: prevState.text + '.'
          }
        });
      }
    }.bind(this), 300)
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render(){
    return (
      <p style={loadingTag}>{this.state.text}</p>
    )
  }
}

Loading.defaultProps = {
  text: 'Loading'
};


module.exports = Loading;
