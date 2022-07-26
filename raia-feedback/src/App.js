import {React, useState, useEffect} from 'react'
import Form from './Form';

const App = () => {
  const [users, setUsers] = useState([]);


  useEffect(()=>{
    fetch('http://localhost:8000/users')
    .then((res)=> res.json())
    .then((data) => setUsers(data))
  },[])
  return (
    <div>
      <h1>users</h1>

     {users.map((user)=>(<>
     <h2>{user?.name}</h2>
     <h2>{user.email}</h2>
     </>))}


 </div>
  );
}



export default App;