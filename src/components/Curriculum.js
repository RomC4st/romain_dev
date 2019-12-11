import React, { Component } from 'react'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { withStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Grid from "@material-ui/core/Grid";

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
  }
});

class Curriculum extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <div className="Curriculum">
          <Grid item md={12} className={classes.marginBottom}>


            <a target='_blank' rel="noopener noreferrer" href='https://github.com/RomC4st'>
              <FontAwesomeIcon value='github' icon={faGithub} />
            </a>
            <a target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/romain-castillon/'>
              <FontAwesomeIcon value='linkedin' icon={faLinkedin} />
            </a>

          </Grid>

        </div>
      </Grid>
    )

  }


}

export default withStyles(styles)(Curriculum)