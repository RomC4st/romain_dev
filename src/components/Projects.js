import React, { Component } from 'react';
import { Grid,  CardMedia, withStyles,  Card, CardActionArea } from "@material-ui/core/";

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
  state = {
    
  }
  handleClick = () => {
    this.setState({
      copy: true
    })
  }
  componentDidMount = () => {
   console.log(window.innerWidth)
  }

  render() {
    const { classes } = this.props;
    return (
      <div className='Projects'>
        <Grid container spacing={0}
          direction="column"
          alignItems="center"
          justify="center">
          <Grid item sm={12} className="top">
            <Card className={classes.card} align='center'>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  title='Cagnotte leetchi'
                >
                  <iframe
                    title="JeuxPhaser"
                    className={classes.game}                    
                    height="640px"
                    src='https://starshoot.000webhostapp.com/'
                    scrolling="no"           >
                  </iframe>
                </CardMedia>
              
              </CardActionArea>

            </Card>

          </Grid>
        </Grid>
      </div>
    )
  }

}


export default withStyles(styles)(Projects);