import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import TechnicalSkills from "./Components/TechnicalSkills";
import About from "./Components/About";
import Projects from "./Components/Projects";
import NavBar from "./Components/NavBar";



function App() {

  return (
    <>
      <Router>
        <header>
        <NavBar />
        </header>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About/>}/>
            <Route path="/Technical Skills" element={<TechnicalSkills/>}/>
            <Route path="/Projects" element={<Projects/>} />
          </Route>
        </Routes>
      </Router>
      </>
  );

}

export default App;
