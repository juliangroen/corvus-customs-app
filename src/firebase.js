import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
// Initialize Firebase
// const firebaseConfig = {
//     apiKey: '__API_KEY__',
//     authDomain: '__AUTH_DOMAIN__',
//     databaseURL: '__DATABASE_URL__',
//     projectId: '__PROJECT_ID__',
//     storageBucket: '__STORAGE_BUCKET__',
//     messagingSenderId: '__MESSAGING_SENDER_ID__',
//     appId: '__APP_ID__',
//     measurementId: '__MEASUREMENT_ID__',
// };

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

// Login Function
export const firebaseSignIn = async (email, pass) => {
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, pass);
    const result = await promise.catch((e) => {
        if (e.message) {
            return e.message;
        }
    });
    return result;
};

// Logout Function
export const firebaseSignOut = () => {
    firebase.auth().signOut();
};

// Universal Get Function
export const firebaseGetItem = async (collection, id) => {
    return await db.collection(collection).doc(id).get();
};

// Universal Set Function
export const firebaseSetItem = async (collection, obj) => {
    return await db.collection(collection).doc(obj.id).set(obj);
};

// Universal Delete Function
export const firebaseDeleteItem = async (collection, id) => {
    return await db.collection(collection).doc(id).delete();
};

// Add Vehicle Function
export const firebaseAddVehicle = async (obj) => {
    return await db.collection('vehicles').doc(obj.id).set(obj);
};
