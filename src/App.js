import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import Login from './components/login'
import SignUp from './components/signup'
import Welcome from './components/welcomeComponent'
import Search from './components/search'
import ViewResults from './components/viewResults'
import './components/login.css'
import './components/search.css'
import './components/viewResults.css'
import './App.css';

function App() {
  return (<Router>
    <div className="App">
      <nav>
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route path='/' exact component={Login} />
            <Route path="/sign-in" exact component={Login} />
            <Route path="/sign-up" exact component={SignUp} />
            <Route path="/welcome" exact component={Welcome}/>
            <Route path="/search" exact component={Search}/>
            <Route path="/viewResults" exact component={ViewResults}/>
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;
