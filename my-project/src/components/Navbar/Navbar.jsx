import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <> 
     {/* <nav class="navbar">
      <div class="navbar-brand">
        <a href="#">MyWebsite</a>
      </div>
      <ul class="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
     */}
    <button disabled={true} style={{back}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg">10000</button>
  </>
  )
}

export default Navbar