import React from 'react';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [Mode,setMode] =useState('light'); // whether dark mode is enabled or not

  const [alert,setAlert] =useState(null);

  const showAlert =(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode=()=>{
    if(Mode === 'light'){
      setMode('dark')
      document.body.style.background ='rgb(0 32 60)';
      showAlert("Dark mode has been enabled","success");
      // document.title ='TextUtils - Dark mode';
    }else{
      setMode('light')
      document.body.style.background ='white';
      showAlert("Light mode has been enabled","success");
      // document.title ='TextUtils - Light mode';

      // User ko pareshan karne ke liye {Advertising}

      // setInterval(() => {
      //   document.title='TextUtils - won $1000'
      // }, 1000);
      // setInterval(() => {
      //   document.title='TextUtils - Click to claim'
      // }, 1500);
    }
  }

  return ( 
  <>
    {/* <Navbar/> default ka use hota hai yaha  */}
    {/* <Navbar title="TextUtils" aboutText="utilities"/> */}
      <Router>
        <Navbar title="TexTools" Mode={Mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>

        {/* bootstrap class hai container */}
        <div  className="container">
        <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
            <TextForm showAlert={showAlert} heading="Enter the text to analyze" Mode={Mode}/>
            </Route>
        </Switch>
          
        </div>
      </Router>

  </>  
  );
}

export default App;
