import {React, useState, useEffect} from 'react'
// import Form from './src/Form'
import './App.css'

const App = () => {
  const [users, setUsers] = useState({
    name:'',
    identification:'',
    department:'',
    rating:'',
    reason:'',
  });

  const onChange=(e)=>{
    const {value, name}=e.target;

    setUsers((state)=>({
      ...state,
      [name]:value
    }));
  }

  const showData=()=>{
    console.log('', )

  }

  const onSubmit=(e)=>{
    e.preventDefault();
  }


  useEffect(()=>{
    fetch('http://localhost:8000/users')
    .then((res)=> res.json())
    .then((data) => setUsers(data))
  },[])
  return (
    <div className='App'>
      <div>
        <img src='https://www.hadalsame.com/wp-content/uploads/2022/04/S-123.jpg'></img>
      </div>
      <header className='App-header'>
        <form onSubmit={onSubmit}>
          <label>
            Name:
            <input onChange={onChange} name="name" value={users.name}></input>
          </label>
          <hr/>

          <div>
          <label>
            ID Number:
            <input onChangeEmail={onChange} name="ID" value={users.identification}></input>
          </label>
          </div>

          <div>
          <label>
            Instituition/office:
            <input onChangeEmail={onChange} name="office" value={users.office}></input>
          </label>
          </div>

          <div>
          <label>
            Department visited:
            <input onChangeEmail={onChange} name="department" value={users.department}></input>
          </label>
          </div>

          <div>
          <label>
            Service quality rating(1-10):
            <input onChangeEmail={onChange} name="rating" value={users.rating}></input>
          </label>
          </div>

          <div>
          <label>
            Reason for above rating:
            <input onChangeEmail={onChange} name="reason" value={users.reason}></input>
          </label>
          </div>

          
    <div>
    <button onClick={showData}>Submit</button>
    </div>
        </form>
      </header>
      <h1></h1>
 </div>
  );
}



export default App;