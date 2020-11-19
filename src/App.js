import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Projects from "./Projects.js";
import Home from "./Home.js";
import Contact from "./Contact.js";
import Navbar from "./Navbar.js";
import About from "./About.js";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="container">
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
