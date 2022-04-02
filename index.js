mapboxgl.accessToken = 'pk.eyJ1IjoiamNoaWxsIiwiYSI6ImNrZGl0cGlpbzA4ZmEzMm8wZHdkYmJiNDMifQ.C941o-cDXISu58gsmm8sIw';
const map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/mapbox/streets-v11', // style URL
center: [-79.5, 35.5], // starting position [lng, lat]
zoom: 7 // starting zoom
});