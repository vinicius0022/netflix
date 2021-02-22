import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Firebase Configuration
const config = {
    apiKey: "AIzaSyBBJ3igsxs790BzuJEkVOQnc-W3HPD4qTo",
    authDomain: "netflixclone-56c39.firebaseapp.com",
    projectId: "netflixclone-56c39",
    storageBucket: "netflixclone-56c39.appspot.com",
    messagingSenderId: "923144084767",
    appId: "1:923144084767:web:4972356b9a1f431fc1e42a"
}

const firebase = Firebase.initializeApp(config)

export { firebase }