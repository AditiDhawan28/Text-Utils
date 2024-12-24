
//import About from './About';
import Alerts from './Alerts';
import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';
import About from './About.js'
import React,{useState} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom";



function App() {
  const [mode,setMode]=useState("light");
  const [alert,setAlert]=useState(null);
//  const [change,setChange]=useState("#042743");

  // const colorChange=()=>{
  //   if (change==="Green"){
  //     document.body.style.backgroundColor="#2a784a";
  //     setChange("Green")
  //   }
  //   if (change==="Grey"){
  //     document.body.style.backgroundColor="#2a784a";
  //     setChange("Grey")
  //   }
  //   if (change==="Sky"){
  //     document.body.style.backgroundColor="#8cd5e7";
  //     setChange("Sky")
  //   }
  // }

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },2000);

  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode("dark")
      document.body.style.backgroundColor="#042743";
      showAlert("Dark mode has been enabled","success")
      document.title='TextUtils - Dark'
    }else{
      setMode("light")
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been enabled","success")
      document.title='TextUtils - Light'
    }
  }
  return (
    <>

    <Router>
     <Navbar title ="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
     <Alerts alert={alert}/>
    <div className="container my-3">
    <Routes>
    <Route exact path="/about" element={<About/>}/>
      
   
    <Route exact path="/" element={<TextForm showAlert={showAlert} heading="TextBox" mode={mode}/>}/>
    
    </Routes>
          </div>
          </Router>
    </>
  );
}

export default App;
