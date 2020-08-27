import React from "react";
// import './App.css';
import Nav from "./components/Nav";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio.js";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
