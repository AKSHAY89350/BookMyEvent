import './App.css';
import Login from './LoginComponent/Login';

import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import React, { Component } from 'react'
import DashBoard from './components/DashBoard';
import Error1 from './LoginComponent/Error';
class App extends Component{
  
  render(){
    return (
      <div>
        <Login/>
      </div>
    ) 
  }
}

export default App;
