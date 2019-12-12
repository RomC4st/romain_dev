import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";
import axios from 'axios';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { withStyles } from "@material-ui/core/styles";
import { Input, Button, Typography } from '@material-ui/core';
import { SERVER_BOT } from '../config/config'
import paperPlane from '../images/paperplane.png';
import robot from '../images/robot.png';
import OutsideClickHandler from 'react-outside-click-handler';



const styles = (theme) => ({
  Visible: {
    display: 'block',
    height: '50vh',
    borderRadius: '15px',
    backgroundColor: '#fff',
    borderLeft: '1px solid black',
    borderRight: '1px solid black',
    borderBottom: '1px solid black',
    marginBottom:'8vh',
      transform: 'translateY(-20%)'

  },
  Padding: {
    padding: '8px',
    backgroundColor: '#fff',
    borderRadius: '20px'
  },
  Hidden: {
    display: 'none'
  },
  Top: {
    position: 'absolute',
    fontSize: '40px',
    right: '2vw',
    bottom: '60vh',
    cursor: 'pointer'
  },
  Bottom: {
    position: 'absolute',
    fontSize: '40px',
    right: '2vw',
    bottom: '6vh',
    cursor: 'pointer',
    [theme.breakpoints.down(769)]: {
      bottom: '10vh'
    },

  },
  Title: {
    padding: '3% 0',
    borderTopLeftRadius: '15px',
    borderTopRightRadius: '15px',
    color: '#fff',
    backgroundColor: '#254280'
  }
});

class Bot extends Component {
  state = {
    response: "Je suis également disponible sur WhatsApp au: +1 415-523-8886. Il suffit de m'envoyer le code 'join shells-earlier' pour m'activer",
    click: false,
    req: '',
    body: ''
  }
  handleClick = () => {
    this.setState({ click: !this.state.click })
  }
  handleChange = (e) => {
    this.setState({ body: e.target.value })
  }
  handleSubmit = () => {
    this.setState({ req: this.state.body, body: '' })
    const url = SERVER_BOT
    const body = { Body: this.state.body }

    axios.post(url, body)
      .then(res => {
        const r = res.data.split('<Message>');
        const response = r[1].split('</Message>');
        this.setState({ response: response[0] })
      })

  }
  render() {
    const { classes } = this.props;
    const { click, response, req } = this.state
    return (
      <OutsideClickHandler
        onOutsideClick={() => {
          this.setState({
            click: false
          });
        }}
      >
        <div className='bot'>
          <img src={robot} alt='robot' className={click === false ? classes.Bottom : classes.Hidden} onClick={this.handleClick} value='robot' icon={faReact} />

          <div className={click === false ? classes.Hidden : classes.Visible}>

            <Typography onClick={this.handleClick} className={classes.Title} color="textSecondary" gutterBottom>
              GoogleBot
                </Typography>
            <Grid container >
              <Grid item md={12} >
                <p className='text'><span>{response}</span></p>
                <p className='text'><span className={req === '' ? 0 : classes.Padding}>{req}</span></p>
                <Input
                  name='message'
                  placeholder='  Tapez votre texte ici'
                  id="standard-input"
                  onChange={this.handleChange}
                  value={this.state.body}
                />
                <Button className='button_chatBot' onClick={this.handleSubmit}><img alt='send' src={paperPlane}></img></Button>
              </Grid>
            </Grid>
          </div>
        </div>
      </OutsideClickHandler>
    );
  }
}

export default withStyles(styles)(Bot);