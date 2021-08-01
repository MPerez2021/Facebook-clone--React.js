import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBXig_jRRIedGtOj2aMv2MMOkLgTkpXZPQ",
  authDomain: "facebook-clone-50b08.firebaseapp.com",
  projectId: "facebook-clone-50b08",
  storageBucket: "facebook-clone-50b08.appspot.com",
  messagingSenderId: "921788065498",
  appId: "1:921788065498:web:4e6614ea3981c1694827e3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
})

export {auth, provider};
export default db;