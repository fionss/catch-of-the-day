import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAdCb9ol4GvyLofNPvnKal6GSISGn1okBo",
    authDomain: "catch-of-the-day-ori-jay.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-ori-jay.firebaseio.com",
});


const base = Rebase.createClass(firebaseApp.database());

// This is a named export 
export { firebaseApp };

// This is a default export
export default base;