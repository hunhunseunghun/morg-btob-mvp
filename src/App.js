import './App.css';
import {useEffect} from "react"
import {firestore} from "./Firebase.jsx"
import { collection, getDocs} from "firebase/firestore"

function App() {

  useEffect(()=>{
   console.log(firestore)
  },[])


  const getData = async(db) =>{
    const querySnapshot = await getDocs(collection(db, "user"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});
  }

 
  return (
    <div className="App">
      <iframe src="https://en.wikipedia.org/wiki/Tutorial"></iframe>
    </div>
  );
}

export default App;
