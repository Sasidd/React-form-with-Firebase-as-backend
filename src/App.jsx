import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [firstName,setFirstName]=useState('')
  const [lastName,setLastName]=useState('')
  var dataArray = [];

  // const sample=[
  //   {
  //     name:"saad",
  //     age:12
  //   },
  //   {
  //     name:"saadia",
  //     age:14
  //   },
  //   {
  //     name:"saadiiii",
  //     age:123
  //   }
  // ]

const Add= async()=>{
if(firstName=='' && lastName==''){
  alert("Some field is missing")
}
else{
  const resp=await fetch('https://reactfirebase-4b521-default-rtdb.firebaseio.com/userData.json',
  {
  method:"POST",
  headers:{
  "Content-Type":"application/json",
  },
  body: JSON.stringify({
    firstName,
    lastName,
  })
  }
  );
  if(resp){  
    setFirstName('')
    setLastName('')
    alert("Data submitted in Firebase")
  }
}
}

const GET=async()=>{
  const getting=await fetch('https://reactfirebase-4b521-default-rtdb.firebaseio.com/userData.json')
  const data=await getting.json()
for (const [key, value] of Object.entries(data)) {
    dataArray.push({
        key,
        ...value
    })
}
  // const array=Object.entries(data)
 console.log(dataArray);
 //dataArray=[]
}

  return (
    <>
    <div className="App">
      <h1>Integrating React form with Firebase</h1>
    <div className="row">
  <div className="col">
    <label htmlFor="">Enter First Name :</label>
    <input type="text" className='mx-1' value={firstName}aria-label="First name" onChange={(e)=>{setFirstName(e.target.value)}}/>
  </div>
  <div className="col">
  <label htmlFor="">Enter Last Name :</label>
    <input type="text" className="mx-1" value={lastName} aria-label="Last name" onChange={(e)=>{setLastName(e.target.value)}}/>
  </div>
  <div className='row mt-3'>
  <div className='col'>
  <button type="button" className="btn btn-primary App" onClick={Add}>Submit</button>
  </div>
  </div>
</div>
    </div>

    <button type='button' className='btn btn-success mx-2' onClick={GET}>GET Data</button>
    </>
  );
}

export default App;
