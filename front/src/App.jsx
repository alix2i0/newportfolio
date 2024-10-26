import React, { useState } from "react";
// import ParticleBackground from './ParticleBackground'; 
import ParticleBackground from './ParticleBackground';


import "./index.css";
import Home from "./Home";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import WarpDrive from "./Wrap";


function App() {
  return (
    <>
      <WarpDrive/>
     
      {/* <Home/> */}
      {/* <HomeComponent/> */}
      {/* <ParticleBackground  id="spacec" /> */}
    </>
  );
}
export default App;
