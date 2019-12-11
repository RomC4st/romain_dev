import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { withStyles,Card,CardContent } from "@material-ui/core";
import ReCAPTCHA from "react-google-recaptcha";
import { RECAPTCHA_SITE_KEY, SERVER_URL } from '../config/config'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

let recaptchaInstance;

const styles = (theme) => ({
  TextField: {
    margin: '3%',
    width: '80%',
    [theme.breakpoints.down(767)]: {
      width: '100%',
      margin: '0'
    },
  },
  card: {
    marginTop: '11vh',
    paddingBottom: '4%'
  },
  MarginTop: {
    paddingTop: '100px',
  },
  marginTopLight: {
    marginTop: '50px'
  },
  Form: {
    maxWidth: '1000px',
    margin: 'auto',
    paddingBottom: '10%',
    borderRadius: '30px',
    // boxShadow:'5px 3px 5px #9E9E9E',
    // backgroundColor:'rgba(32, 174, 175,0.2)',
    [theme.breakpoints.down('sm')]: {
      padding: '10%',
    },
  },
  marginLeft: {
    marginLeft: '10%'
  },
  checkbox: {
    float: 'left',
    paddingLeft: '10%',
    [theme.breakpoints.down(767)]: {
      paddingLeft: '0',
      margin: '5% 0% 0% 0%',
    },
  }, checkbox2: {
    float: 'left',
    paddingLeft: '10%',
    [theme.breakpoints.down(767)]: {
      paddingLeft: '0',
      margin: '5% 0% 8% 0%',
    },
  },
  marginRight: {
    marginRight: '20px'
  },
  Notselected: {
    display: 'none'
  },
  Captcha: {
    padding: '0 35%',
    marginTop: '100px',
    [theme.breakpoints.down(769)]: {
      padding: '0 25%',
    },
    [theme.breakpoints.down(767)]: {
      padding: '2% 0',
      transform: 'scale(0.8) translateX(-12%)',
    },
  }
});



class Form extends Component {

  state = {
    name: ``,
    message: ``,
    email: ``,
    send: false,
    value_captcha: null
  }


  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  };
  onChange = (value) => {
    this.setState({
      value_captcha: value
    })
  }
  resetRecaptcha = () => {
    recaptchaInstance.reset();
  };

  handleSubmit = (e) => {

    const { name, message, email, value_captcha } = this.state
    e.preventDefault();

    if (value_captcha !== null) {
      const url = SERVER_URL
      const body = {
        name: name,
        message: message,
        email: email,
        value: value_captcha
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
        })).then(() => {
          this.resetRecaptcha()
        })
        .catch(err => {
          return alert(err);
        });
    } else {
      alert('Captcha incorrecte')
    }


  };
  render() {
    const { classes } = this.props;
    return (

      <ValidatorForm
        ref="form"
        onSubmit={this.handleSubmit}
        className={classes.Form}
      >
        <Card className={classes.card}>
          <CardContent >
            <Grid item sm={12} className={classes.MarginTop}>
              <TextValidator
                className={classes.TextField}
                required
                name='name'
                id="standard-name"
                validators={[`matchRegexp:^(?![ .]+$)[a-zA-Z çÇéèàêùÙÉÈÀ&.'-]*$`]}
                onChange={this.handleChange}
                label="Nom"
                margin="normal"
                value={this.state.name}
              />
            </Grid >
            <Grid item md={12}>
              <TextValidator
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
            <Grid item md={12} >
              <TextValidator
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
            <Grid item md={6} className={classes.Captcha}>
              <ReCAPTCHA
                ref={e => recaptchaInstance = e}
                sitekey={RECAPTCHA_SITE_KEY}
                onChange={this.onChange}
              />
            </Grid>
            <Grid item sm={12} className="form_button">
              <Button
                className={classes.marginTopLight}
                color="primary"
                type="submit"
                theme={this.createMuiTheme}
                variant="contained"
              >
                Envoyer
                </Button>
            </Grid>
          </CardContent>
        </Card>
      </ValidatorForm>

    )
  }
}
export default withStyles(styles)(Form)