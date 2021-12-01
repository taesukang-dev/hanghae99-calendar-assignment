import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyA5P9PazJaVz7L2Ghoz3PmYN_-FqvagVC0',
  authDomain: 'calendar-schedule-66aa3.firebaseapp.com',
  projectId: 'calendar-schedule-66aa3',
  storageBucket: 'calendar-schedule-66aa3.appspot.com',
  messagingSenderId: '178849075018',
  appId: '1:178849075018:web:b02840588509fac150fbb3',
  measurementId: 'G-2V5RGTCG47',
}

firebase.initializeApp(firebaseConfig)

const firestore = firebase.firestore()

export { firestore }
