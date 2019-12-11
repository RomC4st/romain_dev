// import React from 'react';
// import Bot from './Bot'
// import '../css/App.css';

// const Footer = () => {
//   return (
//     <footer className="App-footer">
//       <Bot />
//     </footer>
//   )
// }

// export default Footer;

import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";




const styles = theme => ({
  flex: {
    flexGrow: 1
  },
  footer: {
    position: "fixed",
    textAlign: "center",
    left: 0,
    bottom: 0,
    right: 0,

    backgroundColor: "#254280"
  }
});

class Footer extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Paper >
        <Grid container>
          <AppBar position="static" className={classes.footer}>
            <Toolbar variant="dense">
              <Typography
                variant="caption"
                color="inherit"
                className={classes.flex}
              >
                Romain Castillon © Copyright 2019
              </Typography>
              <Typography color="inherit" variant="caption">
                Terms and Conditions
              </Typography>
            </Toolbar>
          </AppBar>
        </Grid>
      </Paper>
    );
  }
}


export default withStyles(styles)(Footer);
