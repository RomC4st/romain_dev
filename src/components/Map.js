import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl';
import '../../node_modules/mapbox-gl/dist/mapbox-gl.css';
import '../css/App.css';
import { withStyles } from "@material-ui/core/styles";
import { MAPBOX_API_KEY } from '../config/config'


mapboxgl.accessToken = `${MAPBOX_API_KEY}`;

const styles = (theme) => ({
  topRight: {
    display: 'block',
    height: '78.5vh',
    margin: '11vh 0',
    [theme.breakpoints.down('sm')]: {
          },
  }
})
class Map extends Component {

  state = {
    lng: 2.31281,
    lat: 48.8211,
    zoom: 13
  };

  componentDidMount() {
    const { lng, lat, zoom } = this.state;

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [lng, lat],
      zoom
    });
    map.on("load", (e) => {
      const marker = new mapboxgl.Marker({
        draggable: false,
        color: '#254280'
      })
        .setLngLat(map.getCenter())
        .setPopup(new mapboxgl.Popup({ offset: 25 }).setText('Romain Castillon - Developpeur Web'))
        .addTo(map)
      return marker
    })
  }

  render() {
    const { classes } = this.props;

    return (
      <div ref={el => this.mapContainer = el} className={classes.topRight} />
    );
  }
}

export default  withStyles(styles)(Map);