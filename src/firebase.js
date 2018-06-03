import firebase from 'firebase'


const config = {
    apiKey: "AIzaSyBlb3VM_cMa91CgrTnZHhMas1wov2N_wAU",
    authDomain: "database-64c3c.firebaseapp.com",
    databaseURL: "https://database-64c3c.firebaseio.com",
    projectId: "database-64c3c",
    storageBucket: "database-64c3c.appspot.com",
    messagingSenderId: "738103649948"
};
firebase.initializeApp(config);


export const auth = firebase.auth()
export const database = firebase.database()
export const googleProvider = new firebase.auth.GoogleAuthProvider()