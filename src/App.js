import logo from "./logo.svg";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";


function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if(mode === "light"){ 
      setMode("dark");
      document.body.style.backgroundColor = '#252529';
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = '#fdfdfa';
    }
  }

  return (
    <>
    {/* <Navbar title="TextUtils" about="About TextUtils" /> */}
    <Navbar title="TextUtils" logo={logo} mode={mode} toggleMode={toggleMode}/>
    <div className="container my-3">
      <TextForm heading="Enter The Text To Analyze" mode={mode}/>
      {/* <About /> */}
    </div>
    </>
  );
}

export default App;
