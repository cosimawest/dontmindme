import React, { useState, Component, useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../pages/style.css';
import '../App.css';

import Footer from '../components/Footer.js';

import GraduationImage from '../assets/welcome_image.svg';


function LogIn(props) {
  return (
    <div className="home">
        <div className="spacer">&nspb;</div>
        
        <div className="welcome-section"> 
            <div className="welcome-section__inner inner">      
                <div className="welcome-section-image__container">
                    <img className="welcome-section-image" src={GraduationImage}/>
                </div>
                <div className="welcome-section-text__container">
                    <div className="welcome-section-text__inner">
                        <h1>Peer-to-Peer College <span style={{fontFamily: 'Poppins Bold'}}>Textbook Marketplace</span></h1>
                        <p>Buy and sell your textbook materials right on your college campus</p>

                        {props.mode === "signup" ?
                        <div className="login-container">
                            <div className="login-header">
                                    <div className="login-option selected">Sign Up</div>
                                    <div className="login-option"  onClick={() => props.setMode("login")}>Log In</div>
                            </div>
                            <div className="login-inputs">
                                <div className="side-by-side">
                                    <input 
                                        type="text"
                                        placeholder="Full name"
                                        className="half-login-input"
                                    />
                                    <input 
                                        type="text"
                                        placeholder=".edu email"
                                        className="half-login-input"
                                        />
                                </div>
                                <input 
                                    
                                    type="textarea"
                                    placeholder="Password"
                                    className="login-input"
                                />
                                <input 
                                    type="textarea"
                                    placeholder="Confirm password"
                                    className="login-input"
                                />
                                <div className="button-holder">
                                    <Link to="/main-home"><button onClick={() => props.setLoggedIn(true)}>Create Account</button></Link>
                                    <div><a>Privacy Policy</a> & <a>Terms of Service Agreement</a></div>
                                </div>
                            </div>                            
                        </div> 
                        :
                        <div className="login-container">
                            <div className="login-header">
                                    <div className="login-option" onClick={() => props.setMode("signup")}>Sign Up</div>
                                    <div className="login-option selected">Log In</div>
                            </div>
                            <div className="login-inputs">
                                <input 
                                    
                                    type="textarea"
                                    placeholder=".edu email"
                                    className="login-input"
                                />
                                <input 
                                    type="textarea"
                                    placeholder="Password"
                                    className="login-input"
                                />
                                <div className="button-holder">
                                    <Link to="/main-home"><button onClick={() => props.setLoggedIn(true)}>Log In</button></Link>
                                    <div>I forgot my username/password</div>
                                </div>
                            </div> 
                        </div>
                        }
                    </div>
                </div>
            </div>
            <Footer/>
         </div>
    </div>
  );
}

export default LogIn;
