import logo from "./logo.svg";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if(mode === "light"){ 
      setMode("dark");
      document.body.style.backgroundColor = '#252529';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = '#fdfdfa';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
    {/* <Navbar title="TextUtils" about="About TextUtils" /> */}
    <Navbar title="TextUtils" logo={logo} mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <TextForm heading="Enter The Text To Analyze" mode={mode} showAlert={showAlert}/>
      {/* <About /> */}
    </div>
    </>
  );
}

export default App;
