import './App.css';
import {useEffect} from "react"

// Firebase
import firebase from "firebase/compat/app";
import {firestore} from "./Firebase.jsx"
import { collection, getDocs} from "firebase/firestore"

function App() {

  useEffect(()=>{
    const db = firebase.firestore()
    db.collection("user").get().then((res)=>{
      console.log("res", res)
      res.forEach((doc)=>{
        console.log("doc:",doc.data())
      })
    })
  },[])


 

 
  return (
    <div className="App">
      <iframe width="100%" height="700px" src="https://lookerstudio.google.com/embed/reporting/8a143aea-111f-473a-bd41-26f9e6a29f5f/page/p_xbg82f1i4c"  frameborder="0" style={{border:0}} ></iframe>
    </div>
  );
}

export default App;
