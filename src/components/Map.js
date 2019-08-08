import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl';
import '../../node_modules/mapbox-gl/dist/mapbox-gl.css';
import '../css/App.css'

mapboxgl.accessToken = 'pk.eyJ1IjoiY3IwbjBzIiwiYSI6ImNqdHB1cTQ2azA3cmw0M2swdGtiY3Noa3MifQ.EM0c8d_0JEcc3FOLQ8P0CA';
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
    })
  }

  render() {
    return (
     
        <div ref={el => this.mapContainer = el} className="top-right" />
      
    );
  }
}

export default Map;