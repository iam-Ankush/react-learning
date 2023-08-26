import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
import { 
  BrowserRouter as Router, 
  Switch,
  Route , Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleDarkMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark Mode is enabled", "success")
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode is enabled", "success")
    }
  }
  return (
    <>
    <Router>
      <Navbar title="Text~Utilss" home="Home" mode={mode} toggleDarkMode={toggleDarkMode} />
      <Alert alert={alert} />
      <div className="container my-3">
       <Routes>
       <Route exact path='/about' element={<About />} />
        <Route exact path='/home' element={<TextForm />} />
        {/* <TextForm showAlert={showAlert} heading="Enter text to analyze below : "  mode={mode}/> */}


       </Routes>
          
          
       
   </div>

    </Router>
    </>
  );
}

export default App;
