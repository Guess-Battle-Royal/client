const firebase = require('firebase/app')
require('firebase/firestore')

// firebase.initializeApp({
//   apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
//   authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: 'https://guessbattleroyal.firebaseio.com',
//   projectId: process.env.VUE_APP_CLOUD_FIRESTORE_PROJECT_ID,
//   storageBucket: 'guessbattleroyal.appspot.com',
//   messagingSenderId: '969038012594',
//   appId: '1:969038012594:web:5f86ee39c5b312c8ee69ab'
// })

var firebaseConfig = {
  apiKey: "AIzaSyDQ02e8qFBW729yjq8uw2vUKrLgIYMOIus",
  authDomain: "guess-br-2a31c.firebaseapp.com",
  databaseURL: "https://guess-br-2a31c.firebaseio.com",
  projectId: "guess-br-2a31c",
  storageBucket: "guess-br-2a31c.appspot.com",
  messagingSenderId: "109327998465",
  appId: "1:109327998465:web:1ec91abbedc7e60b256a00"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore()
module.exports = db

