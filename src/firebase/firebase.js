import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp(
{
    apiKey: "AIzaSyCAGPo3SvTTLkxgnu1v3yq-xHz9xaUtZ3c",
    authDomain: "bookstore-1cbc6.firebaseapp.com",
    projectId: "bookstore-1cbc6",
    storageBucket: "bookstore-1cbc6.appspot.com",
    messagingSenderId: "851676519037",
    appId: "1:851676519037:web:da12b9d0feff5f68c06f14"
  }
);
export function getFirebase(){
    return app;
}
export function getFirestore(){
    return firebase.firestore(app);
}