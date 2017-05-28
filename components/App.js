var React = require('react');
var Navbar = require('./Navbar');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Links = require('./Links');
var Home = require('./Home');
var Battle = require('./Battle');
var NotFound = require('./Notfound');
var Results = require('./Results');


class App extends React.Component {
  render(){
    return (
      <Router>
        <div>
          <Links />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/battle' component={Battle}/>
            <Route path='/battle/results' component={Results}/>
            <Route exact path='/popular' component={Navbar} />
            <Route component={NotFound}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

module.exports = App;
