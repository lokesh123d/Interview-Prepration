import React, { useEffect, useState } from "react";
import { db } from "./firebase-config";
import { collection, getDocs , addDoc ,updateDoc ,doc } from "firebase/firestore";

const App = () => {
  const [users, setUsers] = useState([]);
  const userCollectionRef = collection(db, "users");
  const [username, setusername] = useState('');
  const [age, setage] = useState(0)

  useEffect(() => {
    async function getUsers() {
      const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
    }

    getUsers();
  }, []);



  async function createUser(){
    const userData = {
      name:username,
     age: Number(age)
    }
await addDoc(userCollectionRef,userData);
// console.log(users)
  }


 async function updateuser(id,age){
  const userDoc = doc(db,'users', id)
const newFields = {age:age+1};
await updateDoc(userDoc,newFields)

 }

  return <div>
<input type="text" placeholder="enter your nme" value={username} onChange={(e)=>setusername(e.target.value)}/>
<input type="number" placeholder="age" value={age} onChange={(e)=>setage(e.target.value)}/>
<button onClick={createUser}>Create user</button>
    {
      users.map((user)=>{
        return (<div><h1>{user.name}</h1>
        <h2>{user.age}</h2>
<button onClick={()=>{updateuser(user.id,user.age)}}>Increase</button>
        </div>)
      })
    }
  </div>;
};

export default App;
