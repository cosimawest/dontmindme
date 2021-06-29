import React, { useState, useEffect } from 'react';

import '../pages/style.css';

import Footer from '../components/Footer.js';
import Popup from '../components/Popup.js';

import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import BackArrow from '../assets/back-arrow.svg';


import AddImage from '../assets/add-image.svg';
import BubbleIcon03 from '../assets/bubble-icon-03.svg';
import TextbookImage from '../assets/test-textbook-image.png';


function NewListing(props) {
    const [selectedItem, setSelectedItem] = useState("orders");
    const [textbookSelected, setTextbookSelected] = useState(false);
    const [marked, setMarked] = useState(false);


    const toggleSelectionBar = (target) => {
        document.getElementById("current").classList.remove("dashboard-selection-item__selected");
        document.getElementById("past").classList.remove("dashboard-selection-item__selected");

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
                    <h3>New Listings</h3>

                </div>

                <div className="side-by-side dashboard-selection-bar"></div>            
        
                <form className="add-listing__container" id="add-listing">
                    <div className="add-listing-col-one">
                        <label for="img"><img src={AddImage}/></label>
                        <input className="listing-img-input" type="file" id="img" name="img" accept="image/*"></input>
                        <div className="add-listing-form">
                            <label>Your location (city, state)*</label>
                            <input type="text"/>
                        </div>
                    </div>

                    <table className="add-listing-col-two">
                        <tr className="add-listing-form">
                            <td className="add-listing-label"><label>ISBN:*</label></td>
                            <td className="add-listing-input"><input type="number"/></td>
                        </tr>
                        <tr className="add-listing-form">
                            <td className="add-listing-label"><label>Book title:*</label></td>
                            <td className="add-listing-input"><input type="text"/></td>
                        </tr>
                        <tr className="add-listing-form">
                            <td className="add-listing-label"><label>Subtitle:*</label></td>
                            <td className="add-listing-input"><input type="text"/></td>
                        </tr>
                        <tr className="add-listing-form">
                            <td className="add-listing-label"><label>Author:*</label></td>
                            <td className="add-listing-input"><input type="text"/></td>
                        </tr>
                        <tr className="add-listing-form">
                            <td className="add-listing-label"><label>Notes:</label></td>
                            <td className="add-listing-input"><input type="text"/></td>
                        </tr>
                        <tr className="add-listing-form">
                            <td className="add-listing-label"><label>Subtitle:*</label></td>
                            <td className="add-listing-input"><input type="text"/></td>
                        </tr>
                        <tr className="add-listing-form">
                            <td className="add-listing-label"><label>Price:*</label></td>
                            <td className="add-listing-input">$<input type="number" placeholder="BookMark’d only charges 10% of every transaction."/></td>
                        </tr>
                    </table>
    
                </form>

                <div className="flex-right">
                    <button type="submit" form="add-listing">Publish listing</button>
                </div>
            </div>
            <Footer/>

        </div>
    </div>
  );
}

export default NewListing;
