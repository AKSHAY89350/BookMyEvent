import './App.css';
import Login from './LoginComponent/Login';
import React, { useState } from 'react'
import DashBoard from './components/DashBoard';

const App = () => {
  const [status, setStatus ] = useState('invalid');
  const getStatus = (currentStatus) => {
    setStatus(currentStatus);
  };
  return status === 'invalid' ? (
    <Login getStatus = {getStatus}/>
  ): (
    <DashBoard getStatus ={getStatus} />
  );
};

export default App;
