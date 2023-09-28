function createMapMarker() {
  // TODO: add your own access token
  mapboxgl.accessToken = 'pk.eyJ1Ijoic2VudGhpbGt1cHB1c3dhbXkiLCJhIjoiY2twbTlkMzBlMDQxYjJ2bXcwcG5xdnhzNCJ9.mmPcPQN_3raRRh8Q0S1kEw';


  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [77.13314158185418,11.026168643263624],
    zoom: 12,
  });
// TODO: add a marker to the map
var marker = new mapboxgl.Marker()
.setLngLat([77.13314158185418,11.026168643263624])
.addTo(map);
}

// Do not edit the code below
window.onload = () => {
    createMapMarker();
  };