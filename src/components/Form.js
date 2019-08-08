import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  TextField: {
    margin: '3vh',
    width: '80%'
  },
  Button: {
    marginTop: '3vh'
  }
});

class Form extends Component {
  state = {
    name: ``,
    message: ``,
    email: ``,
    send: false
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    const { name, message, email } = this.state
    e.preventDefault();
    const url = "/email_contact"
    const body = {
      name: name,
      message: message,
      email: email
    };
    axios
      .post(url, body)
      .then(res => {
        if (res.status === 200) {
          return alert(`Email envoyé ${name} !`)
        };
      }, this.setState({
        name: '',
        message: '',
        email: ''
      }))
      .catch(err => {
        return alert(err);
      });

  };
  render() {
    const { classes } = this.props;
    return (

      < div className='form' >
        <h1>Formulaire de contact</h1>

        <form onSubmit={this.handleSubmit}>
          <Grid container>
            <Grid item sm={12}  className="form_name">
              <TextField
                className={classes.TextField}
                required
                name='name'
                id="standard-name"
                onChange={this.handleChange}
                label="Nom"
                margin="normal"
                value={this.state.name}
              />
            </Grid >
            <Grid item md={12} className="form_email">
              <TextField
                className={classes.TextField}
                required
                name='email'
                id="standard-email"
                onChange={this.handleChange}
                label="Email"
                margin="normal"
                value={this.state.email}
              />
            </Grid>
            <Grid item md={12} className="form_message">
              <TextField
                className={classes.TextField}
                required
                name='message'
                id="standard-textarea"
                onChange={this.handleChange}
                label="Message"
                margin="normal"
                value={this.state.message}
              />
            </Grid>
            <Grid item md={12} className="form_button">
              <Button className={classes.Button} type="submit">Envoyer</Button>
            </Grid>
          </Grid>

        </form>
      </div >

    )
  }
}
export default withStyles(styles)(Form)