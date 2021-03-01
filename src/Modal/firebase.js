import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {    
        apiKey: "AIzaSyAfvHAPQrLF4UNKahhJv2uqVR4L8qEELHU",
        authDomain: "veterinary-61131.firebaseapp.com",
        projectId: "veterinary-61131",
        storageBucket: "veterinary-61131.appspot.com",
        messagingSenderId: "750800329140",
        appId: "1:750800329140:web:e73d50b8af36229263bae1"
  }

  export const firebaseApp = firebase.initializeApp(firebaseConfig)