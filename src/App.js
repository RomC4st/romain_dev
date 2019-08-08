import React, { Component } from 'react';
import HomePage from './components/HomePage'
import { Switch, Route, NavLink } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact'
import './css/App.css';
require('dotenv').config()

class App extends Component {
  render() {
    return (

      <div className="App">
        <Header />

        <div>
          <nav>
            <div className='home_link'>
              <NavLink className="Home" exact to="/">
                Accueil
                </NavLink>
            </div>
            <div className='contact_link'>
              <NavLink className="Home" exact to="/contact">
                Contact
                </NavLink>
            </div>
          </nav>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/contact" component={Contact} />
          </Switch>

        </div>
        <Footer />
      </div>

    );

  }

}

export default App;
