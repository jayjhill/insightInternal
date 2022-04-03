// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFunctions, httpsCallable } from "firebase/functions";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyADDnHO6dzQ84WVmXp5hjfN0y0xNqqbLwc",
    authDomain: "insights-343221.firebaseapp.com",
    projectId: "insights-343221",
    storageBucket: "insights-343221.appspot.com",
    messagingSenderId: "612863177031",
    appId: "1:612863177031:web:5e550371bff6f041d51c62",
    measurementId: "G-3K0NJB60TP"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const functions = getFunctions();
const getDevices = httpsCallable(functions, 'addMessage');

mapboxgl.accessToken = 'pk.eyJ1IjoiamNoaWxsIiwiYSI6ImNrZGl0cGlpbzA4ZmEzMm8wZHdkYmJiNDMifQ.C941o-cDXISu58gsmm8sIw';
const map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/mapbox/streets-v11', // style URL
center: [-79.5, 35.5], // starting position [lng, lat]
zoom: 7 // starting zoom
});


getDevices()
    .then((result) => {
        const data = result;
    })

async function getDevices() {

}