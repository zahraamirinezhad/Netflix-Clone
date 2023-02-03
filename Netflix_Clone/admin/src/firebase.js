import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyA3Fl2wZ45wnQd92flf_aQm5FoUQCUWl4k',
  authDomain: 'netflix-clone-a974e.firebaseapp.com',
  projectId: 'netflix-clone-a974e',
  storageBucket: 'netflix-clone-a974e.appspot.com',
  messagingSenderId: '138965099323',
  appId: '1:138965099323:web:3d10785ca590b5c0638d1e',
  measurementId: 'G-3KDBCCQBTK',
}

firebase.initializeApp(firebaseConfig)
const storage = firebase.storage()
export default storage
