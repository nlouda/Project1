if (typeof firebase === 'undefined') throw new Error('hosting/init-error: Firebase SDK not detected. You must include it before /__/firebase/init.js');
firebase.initializeApp({
  "apiKey": "AIzaSyDLHD-UGxlAGDxzebVffh9qwikkVyUGXLo",
  "databaseURL": "https://friendly-chat-1b028.firebaseio.com",
  "storageBucket": "friendly-chat-1b028.appspot.com",
  "authDomain": "friendly-chat-1b028.firebaseapp.com",
  "messagingSenderId": "235456611517",
  "projectId": "friendly-chat-1b028"
});