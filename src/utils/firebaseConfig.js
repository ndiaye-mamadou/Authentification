import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD36HVU7jbdAG34OCEGZGyN1ExnQ0T8QVM",
    authDomain: "my-react-authen.firebaseapp.com",

  projectId: "my-react-authen",
   storageBucket: "my-react-authen.appspot.com",
   messagingSenderId: "1869163297",
  appId: "1:1869163297:web:9d4bbae2673d108eb96c60"
  };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);


export default firebase;