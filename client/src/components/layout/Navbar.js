import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./Navbar.css";


import logo from "./logo.png";

class Header extends Component {
   render() {
     return (
       <div className="navbar navbar-fullwidth auto navbar-expand-lg navbar-light bg-white fixed-top">
           <a className="navbar-brand" href="/"> &nbsp; &nbsp; &nbsp; &nbsp; 
              <img src={logo} width="110" height="40" alt="/" /> &nbsp;   
                                 </a>
            <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">
                   <li className="navbar-item">
                   <Link to="/product" className="nav-link">Why us</Link>
                   </li>

      <li className="navbar-item dropdown position-centre" id="parent">
          <Link to="" className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          &nbsp; Payroll and more</Link>

          <div className="dropdown-menu w-30" aria-labelledby="navbarDropdown">
            <Link to="/payroll" className="dropdown-item mx-auto" href="#">Payroll</Link>
            <Link to="/benefits" className="dropdown-item">Benefits</Link>
            <Link to="" className="dropdown-item">HR Tool</Link>
            <Link to="" className="dropdown-item">HR pros and Services</Link>
            <Link to="" className="dropdown-item">Time Tools</Link>
            <Link to="" className="dropdown-item">Integrations</Link>
            <Link to="" className="dropdown-item">See Demo</Link>
          </div>
        </li>
                    <li className="navbar-item">
                   <Link to="/pricing" className="nav-link">&nbsp; &nbsp; Pricing</Link>
                   </li>
        
         <li className="navbar-item dropdown position-centre" id="parent">
          <Link to="" className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          &nbsp; &nbsp; &nbsp; Accountants</Link>

          <div className="dropdown-menu w-120" aria-labelledby="navbarDropdown">
            <Link to="" className="dropdown-item mx-auto" href="#">Partner with us</Link>
            <Link to="" className="dropdown-item">Accountant resources</Link>
            <Link to="" className="dropdown-item">Find an accountant </Link>
          </div>
        </li>
        
        <li className="navbar-item dropdown position-centre" id="parent">
          <Link to="" className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          &nbsp; &nbsp; &nbsp; Resources</Link>

          <div className="dropdown-menu w-120" aria-labelledby="navbarDropdown">
            <Link to="" className="dropdown-item mx-auto" href="#">Talk Shop: Small business resources</Link>
            <Link to="" className="dropdown-item">Ask Ajirar: Small business basics</Link>
            <Link to="" className="dropdown-item">Free tools</Link>
            <Link to="" className="dropdown-item">Customer Stories</Link>
            <Link to="" className="dropdown-item">Contact us</Link>
            <Link to="" className="dropdown-item">Help Centre</Link>
          </div>
        </li>
                   <li className="navbar-item"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                   <Link to="/register" className="nav-link" role="button"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                   &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Signup</Link>
                   </li>
                   <li className="navbar-item">
                   <Link to="/login" className="nav-link" role="button">Sign in</Link>
                   </li>
              </ul>
            </div>
          </div> 
    );
    }
  }



export default Header;