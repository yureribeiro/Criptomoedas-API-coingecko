import React from "react";
import '../header/header.css';


const Header = () => {
  return (
    <div className="container-header">
      <strong className="title-header">LOGO</strong>
      <nav className="nav">
        <a href="#" className="nav-links">Contato</a>
        <a href="#" className="nav-links">Sobre</a>
        <a href="#" className="nav-links">teste</a>
      </nav>
    </div>
  )
}

export default Header