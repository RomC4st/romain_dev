import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";
import axios from 'axios';
import { withStyles } from "@material-ui/core/styles";
import { Input, Button } from '@material-ui/core';
import { SERVER_BOT } from '../config/config'

const styles = () => ({
  Visible: {
    display: 'block',
    height: '40vh',
    borderTopLeftRadius: '50px',
    borderTopRightRadius: '50px',
    backgroundColor: 'rgba(119,136,153,0.1)',
  },
  Hidden: {
    display: 'none'
  },
  Bottom: {
    top: '35vh !important',
    right: '2',
    borderTopLeftRadius: '100px',
    borderTopRightRadius: '100px'
  },
  Top: {
    borderTopLeftRadius: '100px',
    borderTopRightRadius: '100px'
  }
});

class Bot extends Component {
  state = {
    response: 'Hello',
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
        console.log(r);
        const response = r[1].split('</Message>');
        const link = ()=>{
           if(response[0].includes('http')){
            console.log(1);
          }
        }
        link()
        this.setState({ response: response[0] })
      })

  }
  render() {
    const { classes } = this.props;
    const { click, response, req } = this.state
    return (
      <div className='bot'>
        <h5 onClick={this.handleClick} className={click === false ? classes.Bottom : classes.Top}>Hello From Bot</h5>
        <div className={click === false ? classes.Hidden : classes.Visible}>
          <Grid container >
            <Grid item md={12} >
              <p className='text'>{response}</p>
              <p className='text'>{req}</p>

              <Input
                name='message'
                placeholder='Tapez votre texte ici'
                id="standard-input"
                onChange={this.handleChange}
                value={this.state.body}
              />
              <Button className='button_chatBot' onClick={this.handleSubmit}>Send</Button>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Bot);