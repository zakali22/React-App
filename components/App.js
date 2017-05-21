var React = require('react');
var Navbar = require('./Navbar');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Links = require('./Links');
var Home = require('./Home');
var Battle = require('./Battle');


class App extends React.Component {
  render(){
    return (
      <Router>
        <div>
          <Links />
          <Route exact path='/' component={Home} />
          <Route exact path='/battle' component={Battle}/>
          <Route exact path='/popular' component={Navbar} />
        </div>
      </Router>
    )
  }
}

module.exports = App;
