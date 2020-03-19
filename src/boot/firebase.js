// import something here
import * as firebase from 'firebase';
// "async" is optional
export default () => {
  // something to do

  const firebaseConfig = {
    apiKey: 'AIzaSyC6uGjJscr-b7Tn3aIbjCDwPMSbwBnlbC8',
    authDomain: 'dskt-f50eb.firebaseapp.com',
    databaseURL: 'https://dskt-f50eb.firebaseio.com',
    projectId: 'dskt-f50eb',
    storageBucket: 'dskt-f50eb.appspot.com',
    messagingSenderId: '688370753052',
    appId: '1:688370753052:web:e93a3d34f30068a4e2c9d9',
    measurementId: 'G-9QJ1FHMEM5'
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
};
