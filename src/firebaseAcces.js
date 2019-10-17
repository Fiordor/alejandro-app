import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBOoymPjWshoKCexzaDeGGBquyeoS-wVok",
    authDomain: "alejandro-app-5df50.firebaseapp.com",
    databaseURL: "https://alejandro-app-5df50.firebaseio.com",
    projectId: "alejandro-app-5df50",
    storageBucket: "alejandro-app-5df50.appspot.com",
    messagingSenderId: "176852291692",
    appId: "1:176852291692:web:e8ace844984d86a94cc849"
};

  
const firebaseAcces = firebase.initializeApp(firebaseConfig);

export default firebaseAcces;