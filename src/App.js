import React from "react";
// import './App.css';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import About from "./components/About";
import Portfolio from "./components/Portfolio.js";
import Contact from "./components/Contact";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Nav></Nav>
      <Header></Header>
      <Portfolio></Portfolio>
      <About></About>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
