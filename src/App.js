import React, { Component } from 'react';
import HomePage from './components/HomePage'
import { Switch, Route, Link } from "react-router-dom";
import Footer from './components/Footer';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Curriculum from './components/Curriculum';
import { AppBar, Tabs, Tab, withStyles } from '@material-ui/core'

import './css/App.css';

const styles = () => ({
  BackgroundNav: {
    backgroundColor: '#254280',
    color: '#fff'
  },
  tabsIndicator:{
    backgroundColor:'#fff'
  }
});

class App extends Component {
  state = { value: '0' }
  handleChange = (e, value) => {
    this.setState({ value });
  };

  componentDidMount() {

    const location = window.location.pathname;
    switch (location) {
      case '/':
        this.setState({ value: '0' });
        break;
      case '/curriculum':
        this.setState({ value: '1' });
        break;
      case '/contact':
        this.setState({ value: '2' })
        break;
      case '/projets':
        this.setState({ value: '3' })
        break;
      default:
        return;
    }
  }
  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div className="App">
        <AppBar className={classes.BackgroundNav} title="My Wedding">
          <Tabs
            scrollButtons="auto"
            variant="scrollable"
            onChange={this.handleChange}
            value={value}
            classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
          // value={this.state.tabValue}
          // onChange={this.handleChange}
          >
            <Tab label="&nbsp;Accueil&nbsp;" value='0' classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
              to='/' component={Link} />
            <Tab label="&nbsp;Curriculum&nbsp;" value='1' classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
              to='/curriculum' component={Link} />
            <Tab label="&nbsp;Contact&nbsp;" value='2' classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
              to='/contact' component={Link} />
            <Tab label="&nbsp;Projets&nbsp;" value='3' classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
              to='/projets' component={Link} />
          </Tabs>
        </AppBar>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/curriculum" component={Curriculum} />
          <Route path="/contact" component={Contact} />
           <Route path="/projets" component={Projects} /> 

        </Switch>

        <Footer />
      </div>

    );

  }

}

export default withStyles(styles)(App);
