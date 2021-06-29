import React, { useState } from 'react';

import '../pages/style.css';
import '../App.css';

import Footer from '../components/Footer.js';
import NavBar from '../components/NavBarTwo.js';

import BackArrow from '../assets/back-arrow.svg';
import TextbookImage from '../assets/test-textbook-image.png';
import BubbleIcon03 from '../assets/bubble-icon-03.svg';
import EmptyState from '../assets/orders-empty-state.svg';


function YourOrders() {
    const [selectedItem, setSelectedItem] = useState("orders");
    const empty = false; // temp variable to switch between empty and non-empty states of this page


    const toggleSelectionBar = (target) => {
        document.getElementById("orders").classList.remove("dashboard-selection-item__selected");
        document.getElementById("open-orders").classList.remove("dashboard-selection-item__selected");
        document.getElementById("cancelled-orders").classList.remove("dashboard-selection-item__selected");

        document.getElementById(target).classList.add("dashboard-selection-item__selected");
        setSelectedItem(target);
    };

    return (
        <div className="profile">

            <div className="profile-inner">
                <div className="spacer"></div>

                <div className="bubble-top-right">
                    <img src={BubbleIcon03}/>
                </div>

                 
                <div className="my-dashboard__inner inner">
                    <div className="inline">
                        <a href="/dashboard"><img src={BackArrow} className="backarrow"/></a>
                        <h2 class="dropshadow">My Dashboard</h2>
                    </div>
                    
                    <div className="side-by-side dashboard-secondary-title">
                        <h3>Your orders</h3>

                        <div>Search Bar</div>
                    </div>

                    <div className="dashboard-selection-bar">
                        <div className="dashboard-selection-item dashboard-selection-item__selected" id="orders" onClick={(e) => toggleSelectionBar(e.target.id)}>Orders</div>
                        <div className="dashboard-selection-item" id="open-orders" onClick={(e) => toggleSelectionBar(e.target.id)}>Open Orders</div>
                        <div className="dashboard-selection-item" id="cancelled-orders" onClick={(e) => toggleSelectionBar(e.target.id)}>Cancelled Orders</div>
                    </div>

                    {!empty ? 
                    <div>

                    <div className="order-cluster">
                        <div className="bold">Order placed on Mon. 00, 0000</div>
                        <div className="order-container">
                            <div className="image-container">
                                <img className="contain-img" src={TextbookImage}/>
                            </div>
                            <div className="side-by-side order-info">
                                <div>
                                    <h5 className="semibold">"Algorithms to Live By"</h5>
                                    <div>Authors: some author name</div>
                                    <div>ISBN: ####################</div>
                                </div>
                                <div>
                                    <p className="right">$50.00</p>
                                    <div>
                                        <button className="sign-up-button btn-mini">View item</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="order-container">
                            <div className="image-container">
                                <img className="contain-img" src={TextbookImage}/>
                            </div>
                            <div className="side-by-side order-info">
                                <div>
                                    <h5 className="semibold">"Algorithms to Live By"</h5>
                                    <div>Authors: some author name</div>
                                    <div>ISBN: ####################</div>
                                </div>
                                <div>
                                    <p className="right">$50.00</p>
                                    <div>
                                        <button className="sign-up-button btn-mini">View item</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="order-cluster">
                        <div className="bold">Order placed on Mon. 00, 0000</div>
                        <div className="order-container">
                            <div className="image-container">
                                <img className="contain-img" src={TextbookImage}/>
                            </div>
                            <div className="side-by-side order-info">
                                <div>
                                    <h5 className="semibold">"Algorithms to Live By"</h5>
                                    <div>Authors: some author name</div>
                                    <div>ISBN: ####################</div>
                                </div>
                                <div>
                                    <p className="right">$50.00</p>
                                    <div>
                                        <button className="sign-up-button btn-mini">Leave a review</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="order-container">
                            <div className="image-container">
                                <img className="contain-img" src={TextbookImage}/>
                            </div>
                            <div className="side-by-side order-info">
                                <div>
                                    <h5 className="semibold">"Algorithms to Live By"</h5>
                                    <div>Authors: some author name</div>
                                    <div>ISBN: ####################</div>
                                </div>
                                <div>
                                    <p className="right">$50.00</p>
                                    <div>
                                        <button className="sign-up-button btn-mini">Leave a review</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="order-cluster">
                        <div className="bold">Order cancelled on Mon. 00, 0000</div>
                        <div className="order-container">
                            <div className="image-container">
                                <img className="contain-img" src={TextbookImage}/>
                            </div>
                            <div className="side-by-side order-info">
                                <div>
                                    <h5 className="semibold">"Algorithms to Live By"</h5>
                                    <div>Authors: some author name</div>
                                    <div>ISBN: ####################</div>
                                </div>
                                <div>
                                    <p className="right">$50.00</p>
                                    <div>
                                        <button className="sign-up-button btn-mini">Leave a review</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="order-container">
                            <div className="image-container">
                                <img className="contain-img" src={TextbookImage}/>
                            </div>
                            <div className="side-by-side order-info">
                                <div>
                                    <h5 className="semibold">"Algorithms to Live By"</h5>
                                    <div>Authors: some author name</div>
                                    <div>ISBN: ####################</div>
                                </div>
                                <div>
                                    <p className="right">$50.00</p>
                                    <div>
                                        <button className="sign-up-button btn-mini">Leave a review</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    : 
                    <div className="empty-state-div">
                        <div className="empty-state-title">No orders yet</div>
                        <img src={EmptyState}/>
                        <div>Let's change that!</div>
                        <button className="btn-mini">Check out listings</button>
                    </div>
                    }
                    
                </div>
                
                

            </div>
            
            <Footer/>
        </div>
    );
}

export default YourOrders;
