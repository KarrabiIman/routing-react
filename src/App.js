import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import About from './About';
import Home from './Home';
import Repos from './Repos';
// import RepoDetails from './RepoDetails';
// import createBrowserHistory from 'history/createBrowserHistory';


class App extends Component {
  render() {
    return (
      // The Router: keeps the UI in sync with the URL.
      <Router>
        <div>
          <h2>Welcome to React Router Tutorial</h2>
          <menu>
            <ul>
              <li><Link to={'/'} > Home </Link></li>
              <li><Link to={'/repos'} >Repos</Link></li>
              <li><Link to={'/about'} >About</Link></li>
            </ul>
          </menu>
          <hr />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/repos' component={Repos} />
            {/* <Route path='/about' component={()=> <About title="About Us"/>}  /> */}
            {/* <Route path='/about' render={(props) => <About {...props} title="About Us" />}  /> */}
            <Route path='/about' render={() => <About title="About Us" />}  />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
