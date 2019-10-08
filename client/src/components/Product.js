import React, { Component } from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import banner2 from "./banner2.png";
import banner3 from "./banner3.png";
import Footer from "./layout/Footer";

export default class Product extends Component {
  render() {
    return(
        <div className="Product">
        <div className="lander1">
            <p>Welcome to the people platform</p>
            <h2>Ajirar makes it easy to onboard, pay, insure, and support your hardworking team.</h2>
            <Link to="" className="btn">Try 1 month free</Link>

          <img src={banner2} width="100%" height="415" alt="/" />
                                               </div>
                    
          <div className="lander2">
          <h3>A successful business starts with a successfull team.</h3>
                       <p>Build an incredible workplace and grow your business with Ajirar's all-in-one platform</p>
                       <img src={banner3} width="50%" height="165" alt="/" />
                       
                </div>
        
        <div className="lander3">row example

        </div>

        <div className="lander4">row example

        </div>

        <div className="lander5">row example

        </div>

        <div className="lander6">row example

        </div>

        <div className="lander7">row example

        </div>

        <div className="lander8">
          <p>Prices start at just Kes. 1,198/month</p>
          <h1>Get your team working with Ajirar</h1>
          <Link to="" className="btn">Try 1 month free</Link>
                                               </div>
          
          <div className="lander9">
          <Footer /></div>
       
      </div>
    ); 
  }
}
