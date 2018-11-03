import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDUZFlOaB0Jod8FJEso2asC2Pck-92EZVo",
  authDomain: "meetyourneighbor-c3068.firebaseapp.com",
  databaseURL: "https://meetyourneighbor-c3068.firebaseio.com",
  projectId: "meetyourneighbor-c3068",
  storageBucket: "meetyourneighbor-c3068.appspot.com",
  messagingSenderId: "350555068341"
};

const fire = firebase.initializeApp(config);
export default fire;
