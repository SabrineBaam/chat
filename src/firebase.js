import firebase from "firebase/app"
import "firebase/auth"


export const auth = firebase.initializeApp(
    {
        apiKey: "AIzaSyBfozj3DCxNUJNiugLHqYJsdh0g2OR7h9k",
        authDomain: "chat-9ef46.firebaseapp.com",
        projectId: "chat-9ef46",
        storageBucket: "chat-9ef46.appspot.com",
        messagingSenderId: "152364584129",
        appId: "1:152364584129:web:831384d9dc8090b5039840"
      }
) .auth();