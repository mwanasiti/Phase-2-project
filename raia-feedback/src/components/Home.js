import React from "react";
import Feedback from "./Feedback";
import Form from './Form'

function Home({users, handleData}) {
  const feedBackArray=users.map(user=>{
    return <Feedback key={user.id} name={user.name} identification={user.identification} office={user.office} department={user.department} rating={user.rating} reason={user.reason}/>
  })
  return (
    <>
    <div className='row'>
        <div className='col-md-5'>
        <Form handleData={handleData}/>
        </div>
        <div className='col-md-2'></div>
        <div className='col-md-5'>
        {feedBackArray}
        </div>
        </div>
    </>
  );
}

export default Home;