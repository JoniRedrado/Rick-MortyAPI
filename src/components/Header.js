import React from "react";
import logo from "../img/logo.png"
import '../css/Header.css'

function Header () {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="logo"/>
      <div className="titulo">
        <h1>Personajes de Rick & Morty</h1>
        <h5>por Jonathan Redrado</h5>
      </div>
      <div className="links"> 
        <a href="https://www.linkedin.com/in/jonathan-redrado-3838a3206" rel="noreferrer" target="_blank" >LinkedIn</a>
        <a href="https://github.com/JoniRedrado" rel="noreferrer" target="_blank" >GitHub</a>
      </div>
    </header>
  )
};


export default Header;