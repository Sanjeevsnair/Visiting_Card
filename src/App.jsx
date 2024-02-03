// src/App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [userData, setUserData] = useState({
    name: '',
    age: 0,
    mobile: 0,
    address: '',
    submit: false
  });
  return (
    <>
      <div >
        <div className='form'>
          <input className='name' onChange={(e) => setUserData({ ...userData, name: e.target.value })} type='text' placeholder='name' />
          <input className='age' type="number" placeholder='age' onChange={(e) => setUserData({ ...userData, age: e.target.value })} />
          <input className='address' onChange={(e) => setUserData({ ...userData, address: e.target.value })} type='text' placeholder='address' />
          <input className='mobile' type="number" placeholder='mobile number' onChange={(e) => setUserData({ ...userData, mobile: e.target.value })} />
          <button className='button' onClick={() => setUserData({ ...userData, submit: true })}>Generate</button>
        </div>

        <div className="frame">
          <div className="rectangle"><img alt="Rectangle" src="rectangle-4.svg" />
            <div className="text-wrapper">{userData.submit && userData.name}</div>
            <div className="div">{userData.submit && userData.age}</div>
            <div className="text-wrapper-2">{userData.submit && userData.mobile}</div>
            <div className="text-wrapper-3">{userData.submit && userData.address}</div>
          </div>
          <img className="img" alt="Rectangle" src="rectangle-3.svg" />
          <img className="rectangle-2" alt="Rectangle" src="frame-child@2x.png" />

        </div>
      </div>


    </>
  )
}

export default App;
