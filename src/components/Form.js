import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid";
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

export default class From extends Component {
  render() {
    
    return (

      <div className='form'>
        <h1>Formulaire de contact</h1>
        <FormControl>
          <Grid container>
            <Grid item md={12} className="form_name">
              <TextField
                required
                id="standard-name"
                label="Nom"
                margin="normal"
              />
            </Grid >
            <Grid item md={12} className="form_email">
              <TextField
                required
                id="standard-email"
                label="Email"
                margin="normal"
              />
            </Grid>
            <Grid item md={12} className="form_message">
              <TextField
                required
                id="standard-textarea"
                label="Message"
                margin="normal"
              />
            </Grid>
            <Grid item md={12} className="form_button">
              <Button>Envoyer</Button>
            </Grid>
          </Grid>

        </FormControl>
      </div>

    )
  }
}