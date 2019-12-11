import React from 'react';
import Map from '../components/Map';
import Form from '../components/Form';
import Grid from "@material-ui/core/Grid";


const Contact = () => {
  return (
    <div className='Contact'>
      <Grid container>
        <Grid item sm={12} md={6} className="top-left">
          <Form />
        </Grid>
        <Grid item sm={12} md={6}  className="top-right">
          <Map />
        </Grid>
      </Grid>
    </div>
  )
}

export default Contact;