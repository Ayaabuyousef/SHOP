import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDHO9tBFqQsxf1CfV4SPDVqZxvOLAMp9oI",
    authDomain: "shop-db-6bad8.firebaseapp.com",
    projectId: "shop-db-6bad8",
    storageBucket: "shop-db-6bad8.appspot.com",
    messagingSenderId: "655207068524",
    appId: "1:655207068524:web:42a74150b376bdf220f949",
    measurementId: "G-6NYLVH4C6Q"
  };

  firebase.initializeApp(config);
//   export const createUserProfileDocument = async (userAuth, additionalData) => {
//     if (!userAuth) return;

  export const auth = firebase.auth();
  export const firestore =firebase.firestore();
  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'})
export const signInWithGoogle=()=>auth.signInWithPopup(provider)


export default firebase;


