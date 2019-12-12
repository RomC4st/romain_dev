import React, { Component } from 'react';
import { Grid, withStyles} from "@material-ui/core/";

const styles = (theme) => ({
 
  card: {
    padding:'16vh 10vw',
    [theme.breakpoints.down('sm')]: {
      padding:'0'
     },
  },

  paragraph: {
    padding: '6% 5% 0 5%',
    fontFamily: 'Bask',
    fontSize: '1.4rem'
  },
  game:{
    width:'480px',
    [theme.breakpoints.down('sm')]: {
     transform:'scale(0.7)',
    },
  }
})

class Projects extends Component {


  render() {
    const { classes } = this.props;
    return (
      <div className='Projects'>
        <Grid container spacing={0}
          direction="column"
          alignItems="center"
          justify="center">
          <Grid item sm={12} className="top">
                  <iframe
                    title="JeuxPhaser"
                    className={classes.game}                    
                    height="640px"
                    src='https://starshoot.000webhostapp.com/'
                    scrolling="no"           >
                  </iframe>
          </Grid>
        </Grid>
      </div>
    )
  }

}


export default withStyles(styles)(Projects);