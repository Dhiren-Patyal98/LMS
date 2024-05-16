import 'firebase/app'
import {initializeApp} from 'firebase/app'
import 'firebase/storage'
import { getStorage } from 'firebase/storage'
const firebaseConfig = initializeApp({
    apiKey: "AIzaSyBu3OREkFxmWxf0hdFL5l2HuYw9tPfPf9o",
    authDomain: "codeedu-7fc91.firebaseapp.com",
    projectId: "codeedu-7fc91",
    storageBucket: "codeedu-7fc91.appspot.com",
    messagingSenderId: "1089266419785",
    appId: "1:1089266419785:web:29462ff3a673ebcae75798",
    measurementId: "G-JDVF2R23N0"
})

const storage = getStorage(firebaseConfig);

export default storage;