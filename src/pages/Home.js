import React, { useState, useEffect } from 'react';

import './style.css';
import '../App.css';


import NavBar from '../components/NavBar.js';
import HowItWorksIcons from '../components/HowItWorksIcons.js';
import SearchBar from '../components/SearchBar.js';
import Footer from '../components/Footer.js';

import GraduationImage from '../assets/welcome_image.svg';

import CreateAccountIcon from '../assets/create-account-icon.svg';
import CreateListingIcon from '../assets/create-listing-icon.svg';
import PublishListingIcon from '../assets/publish-listing-icon.svg';

import FindBookIcon from '../assets/find-book-icon.svg';
import StripeIcon from '../assets/stripe-icon.svg';
import ArrangePickUpIcon from '../assets/arrange-pick-up-icon.svg';

import CampusConnectionIcon from '../assets/campus-connection-icon.svg';
import EcoFriendlyIcon from '../assets/eco-friendly-icon.svg';
import AffordableIcon from '../assets/affordable-icon.svg';
import ThanksContactImg from '../assets/contact-submit-img.svg';
import BubbleIcon02 from '../assets/bubble-icon-02.svg';

import QuoteIcon from '../assets/quote-icon.svg';



function Home(props) {
    const [x, setX] = useState(true);
    const [submitted, setSubmitted] = useState(false);


    console.log(props.mode)


    const soldCheckbox = ({ target: { checked } }) => {
        console.log(x, checked);
        setX(checked);
      };

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
                                <SearchBar/>
                        </div>
                    </div>
                </div>
            </div>
            <div id="how-it-works" className="how-it-works">
                <div className="how-it-works__inner inner">
                    <h2>How it <span style={{fontFamily: 'Poppins Bold'}}>Works</span></h2>
                    <p>We’ve made sure our services are secure and simple. We require that all members sign up with .edu emails only and set up two-step verification. We only charge <span style={{fontFamily: 'Poppins Bold'}}>10% per transaction</span> on the platform, so you can be sure to save most of your earnings.</p>
                    
                    <label className="switch">
                        <input id='how-it-works__checkbox' type="checkbox" checked={x} onChange={soldCheckbox}/>
                        <span className="slider round">
                            <div>Buyer</div>
                            <div>Seller</div>
                        </span>
                    </label>
                    
                    { x ? 
                        <HowItWorksIcons
                            icon1={CreateAccountIcon}
                            description1={<h5>Create an account with<br/> BookMark’d or log in</h5>}
                            icon2={CreateListingIcon}
                            description2={<h5>Create a new listing with<br/> your book information</h5>}
                            icon3={PublishListingIcon}
                            description3={<h5>Publish your listing to get<br/> selling!</h5>}
                        /> :
                        <HowItWorksIcons
                            icon1={FindBookIcon}
                            description1={<h5>Find the book you’d like to<br/> buy</h5>}
                            icon2={StripeIcon}
                            description2={<h5>Pay through Stripe<br/> Payment Processor</h5>}
                            icon3={ArrangePickUpIcon}
                            description3={<h5>Arrange pick-up with<br/> seller to get your book</h5>}
                        />
                    }
                    <button>Learn More</button>
                </div>
            </div>
            <div id="our-mission" className="our-mission">
                <div className="our-mission__inner inner">
                    <h2>Our <span style={{fontFamily: 'Poppins Bold'}}>Mission</span></h2>
                    
                    <div className="our-mission-quote__container">
                        <img src={QuoteIcon}/>
                        <div className="our-mission-quote__text">
                            <h4>Our goal is to give power back to the students.</h4>
                            <p>In the spring of 2019, Sharod Farmer, an undergraduate at the University of Florida, noticed the barriers, lack of resources, and financial hardships associated with purchasing textbooks. The buying system for purchasing textbooks had remained relatively stagnant in an age of consistent advancement. Farmer saw an opportunity to create a specialized book exchange by keeping the buying transactions personalized. In 2019, he founded BookMark’d, the first-ever textbook exchange created for students by students.</p>
                        </div>
                    </div>
                        
                    <h4 className="three-pillars-title">We operate on these three pillars:</h4>

                    <div className="how-it-works__icon-container book-card__container-small">
                        <div className="how-it-works__icon-card book-card">
                            <img src={CampusConnectionIcon}/>
                            <h5>Campus Connection</h5>
                            <p>Creating a community<br/> for college students</p>    
                        </div>
                        <div className="how-it-works__icon-card book-card">
                            <img src={EcoFriendlyIcon}/>
                            <h5>Eco-Friendly</h5>
                            <p>Promoting a more<br/> sustainable campus</p>    
                        </div>
                        <div className="how-it-works__icon-card book-card">
                            <img src={AffordableIcon}/>
                            <h5>Affordable</h5>
                            <p>Helping students save<br/> money on materials</p>    
                        </div>
                    </div>
                </div>
            </div>

            <div id="contact-us" className="contact-us">
                <div className="welcome-section__inner inner">      
                    {!submitted ? 
                    <div className="contact-us-form__container">
                        <form className="contact-us-form">
                            <h4>We want to hear from you!</h4>
                            <p>Fill out this form to get in touch with us. We will respond as soon as we can!</p>
                            <div className="side-by-side-input">
                                <input 
                                    type="text"
                                    placeholder="name"
                                    className="search-bar__container"
                                />
                                <input 
                                    type="text"
                                    placeholder=".edu email"
                                    className="search-bar__container"
                                />
                            </div>
                            <select name="example" className="search-bar__container">
                                <option selected="selected" value="Subject">Subject</option>
                                <option value="one">Choice 1</option>
                                <option value="two">Choice 2</option>
                            </select>
                            <input 
                                style={{margin:"1rem .5rem"}}
                                type="textarea"
                                placeholder="How can we help you?"
                                className="search-bar__container"
                            />
                            <div className="contact-us__button-container">
                                <button className="contact-us__button" onClick={() => setSubmitted(true)}>Submit</button>
                            </div>
                        </form>
                    </div>
                    :
                    <div className="welcome-section-text__container contact-us-thanks inner">
                        <div>
                            <h3>Thank you for contacting us!</h3>
                            <div className="contact-us-thanks-inner">
                                <img src={ThanksContactImg}/>
                                <div>
                                    <p>We will respond to your message as soon as possible. In the meantime, feel free to read through our FAQ page to see if that answers any of your other concerns. </p>
                                    <a href="/faq">View FAQs</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    }
                    
                </div> 
                <div className="bubble-contact-form">
                    <img className="welcome-section-image" src={BubbleIcon02}/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;
