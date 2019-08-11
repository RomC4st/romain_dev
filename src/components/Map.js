import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl';
import '../../node_modules/mapbox-gl/dist/mapbox-gl.css';
import '../css/App.css'
import { MAPBOX_API_KEY } from '../config/config'


mapboxgl.accessToken = `${MAPBOX_API_KEY}`;

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
        draggable: true,
        color: '#000'
      })
        .setLngLat(map.getCenter())
        .addTo(map)
      return marker
    })
  }

  render() {
    return (
      <div ref={el => this.mapContainer = el} className="top-right" />
    );
  }
}

export default Map;