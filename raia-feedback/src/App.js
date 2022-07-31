import {React, useState, useEffect} from 'react'
import Home from './components/Home';
import Header from './components/Header';
import './index.css'
import {Routes, Route} from 'react-router-dom'
import About from './components/About';
import Contact from './components/Contact'


const App = () => {
  const [users, setUsers] = useState([]);

  const handleData=(item)=>{
    const postHeaders={
      method:'POST',
      headers:{'Content-type':'application/json'},
      body:JSON.stringify(item)
  
    }
    fetch('https://raia-backend.herokuapp.com/users',postHeaders)
    .then(res=>res.json())
    .then(data=>setUsers([...users,data]))

  }


  useEffect(()=>{
    fetch('https://raia-backend.herokuapp.com/users')
    .then((res)=> res.json())
    .then((data) =>setUsers(data))
  },[])
  return (
    <div className='App container'>
      <Header/>
      <Routes>
          <Route exact path='/' element={<Home handleData={handleData} users={users}/>}/>
      <Route exact path='/about' element={<About/>}/>
      <Route exact path='/contact' element={<Contact/>}/>
      </Routes>   
 </div>
  );
}



export default App;