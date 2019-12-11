import React, { Component } from 'react'
import { withStyles } from "@material-ui/core/styles";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";

const styles = (theme) => ({

  Title: {
    marginTop: '20%',
    fontFamily: 'Sweet',
    fontSize: '4.0rem',
    color: '#fff',
    textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
    [theme.breakpoints.down(767)]: {
      marginTop: '100px',
    },
  }, title: {
    fontSize: '1.5rem',
    color: '#000'
  },
  back: {
    // backgroundImage: `url(${love})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    marginTop: '48px',
    width: '100%',
    height: '1200px',
    [theme.breakpoints.down(767)]: {
      // backgroundImage: `url(${love2})`

    },
  },
  marginBottom: {
    margin: '70px 0',
    [theme.breakpoints.down(767)]: {
      marginTop: '150px'

    },
  },
  countDown: {
    marginRight: '6px'
  },
  card:{
    width:'50vw',
    margin:'10vh auto'
  },
  paragraph: {
    padding: '5% 14% 4% 14%',
    fontFamily: 'Bask',
    fontSize: '1.4rem',
    [theme.breakpoints.down(767)]: {
      padding: '5% 8% 4% 8%',

    },
  }
});

class HomePage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container>
        <div className="Home_page">
          <Grid item md={12} className={classes.marginBottom}>
            <Card className={classes.card} align='center'>

              <CardContent align='center'>
                <Typography gutterBottom className={classes.pos} color="textSecondary">
                  {/* adjective */}
                </Typography>
                <Typography gutterBottom className={classes.paragraph} variant="body1" component="p">
                  Bienvenue sur le site (en construction) de Romain Castillon - Développeur Web
                </Typography>
              </CardContent>
            </Card>




          </Grid>

        </div>
      </Grid>
    )

  }


}

export default withStyles(styles)(HomePage)