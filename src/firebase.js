import firebase from 'firebase/app';
import 'firebase/auth';

export const auth = firebase.initializeApp({
  apiKey: 'AIzaSyDCohh2QezLxC76PiGkKCekACZAleNLeaQ',
  authDomain: 'chat-app-1ca28.firebaseapp.com',
  projectId: 'chat-app-1ca28',
  storageBucket: 'chat-app-1ca28.appspot.com',
  messagingSenderId: '357825522336',
  appId: '1:357825522336:web:081a2d60247d3f22a637c5'
}).auth();
