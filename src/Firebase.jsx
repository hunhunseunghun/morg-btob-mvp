import { initializeApp } from "firebase/app";
import {getAnalytics} from "firebase/analytics"

import firebase from "firebase/compat/app";
import "firebase/compat/firestore"
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STRAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig)

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore()

// Initilize Cloud Firestore and get a reference to the service
export const db = getFirestore(app)

export {firestore}