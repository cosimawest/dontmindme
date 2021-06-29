import React, { useState } from 'react';

import '../pages/style.css';
import '../App.css';

import Footer from '../components/Footer.js';
import NavBar from '../components/NavBarTwo.js';
import BookCard from '../components/BookCardLong.js';
import Popup from '../components/Popup.js';

import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import BackArrow from '../assets/back-arrow.svg';


import AddListingIcon from '../assets/add-listing-icon.svg';
import BubbleIcon03 from '../assets/bubble-icon-03.svg';
import TextbookImage from '../assets/test-textbook-image.png';
import EmptyState from '../assets/listings-empty-state.svg';


function YourListings() {
    const [selectedItem, setSelectedItem] = useState("orders");
    const [textbookSelected, setTextbookSelected] = useState(false);
    const [marked, setMarked] = useState(false);
    const empty = false; // temp variable to switch between empty and non-empty states of this page


    const toggleSelectionBar = (target) => {
        document.getElementById("current").classList.remove("dashboard-selection-item__selected");
        document.getElementById("past").classList.remove("dashboard-selection-item__selected");

        document.getElementById(target).classList.add("dashboard-selection-item__selected");
        setSelectedItem(target);
    };

  return (
    <div className="profile">

        {textbookSelected && (
            <Popup
                isOpen={textbookSelected}
                setIsOpen={setTextbookSelected}
            >
                <div className="quick-view">
                { marked ? <BookmarkIcon className="bookmark-icon" onClick={() => setMarked(!marked)}/> : <BookmarkBorderIcon className="bookmark-icon" onClick={() => setMarked(!marked)}/> }

                    <div className="image-container quick-view__img">
                        <img className="contain-img" src={TextbookImage}/>
                    </div>

                    <div className="quick-view__content-wrapper">
                        <div className="location-marker">location</div>
                        <div className="">
                            <div className="book-title">Algorithms to Live By</div>
                            <div className="book-subtitle">The Computer Science of Human Decisions</div>
                        </div>
                        <div className="">
                            <div className="book-edition">1st Edition</div>
                            <div className="book-author">Authors: Brian Christian, Tom Griffiths</div>
                            <div className="book-isbn">ISBN: 2983520357035</div>
                        </div>
                        <div className="side-by-side">
                            <div className="book-condition">“Book is in good condition, used once. Great for any cognitive psychology classes.”</div>
                        </div>
                        <div className="popup-last-element side-by-side">
                            <div className="book-title">$50.00</div>
                            
                        </div>
                    </div>
                </div>
            </Popup>
        )}
        

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
                    <h3>Your Listings</h3>

                    <div>Search Bar</div>
                </div>

                <div className="side-by-side dashboard-selection-bar">
                    <div className="side-by-side">
                        <div className="dashboard-selection-item dashboard-selection-item__selected" id="current" onClick={(e) => toggleSelectionBar(e.target.id)}>Current</div>
                        <div className="dashboard-selection-item" id="past" onClick={(e) => toggleSelectionBar(e.target.id)}>Past</div>
                    </div>    

                    <a href="/new-listing">New listing <img src={AddListingIcon} className="center-img"/></a>   
                </div>            
            </div>
        </div>

        
        <div className="my-dashboard__second-inner">
            {!empty ? 
            <div className="my-dashboard__inner inner">
                <div className="order-cluster">
                    <BookCard
                        image={TextbookImage}
                        title={"Structures or Why Things Don't Fall Down"}
                        author={"Brian Christan"}
                        isbn={"2938528572357"}
                        price={"$50"}
                        textbookSelected={textbookSelected}
                        setTextbookSelected={setTextbookSelected}
                    />

                    <BookCard
                        image={TextbookImage}
                        title={"Structures or Why Things Don't Fall Down"}
                        author={"Brian Christan"}
                        isbn={"2938528572357"}
                        price={"$50"}
                        textbookSelected={textbookSelected}
                        setTextbookSelected={setTextbookSelected}
                    />
                </div>
            </div>
            : 
            <div className="empty-state-div">
                <div className="empty-state-title">No listings yet</div>
                <img src={EmptyState}/>
                <div>Time to get selling.</div>
                <button className="btn-mini">Create a Listing</button>
            </div>
            }

            <Footer/>
        </div>
        
    </div>
  );
}

export default YourListings;
