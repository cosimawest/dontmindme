import React, { useState, useLayoutEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

import CloseIcon from '@material-ui/icons/Close';
import onClickOutside from 'react-onclickoutside';

import StarBorderIcon from '@material-ui/icons/StarBorder';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import BackpackIcon from '../assets/backpack-icon.svg';
import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined';
import CheckIcon from '@material-ui/icons/Check';

import TextbookImage from '../assets/test-textbook-image.png';


function useLockBodyScroll() {
    useLayoutEffect(() => {
     // Get original body overflow
     const originalStyle = window.getComputedStyle(document.body).overflow;  
     // Prevent scrolling on mount
     document.body.style.overflow = 'hidden';
     // Re-enable scrolling when component unmounts
     return () => document.body.style.overflow = originalStyle;
     }, []); // Empty array ensures effect is only run on mount and unmount
}

function Popup(props) {
    const [offer, setOffer] = useState(false);
    const [reportSubmitted, setReportSubmitted] = useState(false);
    const [popupType, setPopupType] = useState("quickview");
    const [popupHeight, setPopupHeight] = useState(null);
    const [popupWidth, setPopupWidth] = useState(null);
    const [offerWidth, setOfferWidth] = useState(null);
    const [marked, setMarked] = useState(false);
    const [added, setAdded] = useState(false);
    const [selectedOffer, setSelectedOffer] = useState(0);
    const [offerMode, setOfferMode] = useState("select-offer");

    

    Popup.handleClickOutside = () => {
        props.setIsOpen(false);
    }

    const reset = () => {
        props.setIsOpen(!props.isOpen);
        setOffer(false);
        props.setPopupType("quickview");
    }

    function calcHeight(el) {
        console.log(el.offsetHeight);

        const height = el.offsetHeight;
        const width = el.offsetWidth;
        setPopupHeight(height);
        setPopupWidth(width);
    }

    function calcOfferHeight(el) {
        const width = el.offsetWidth;
        setOfferWidth(width);
    }
    // useLockBodyScroll();

    return (
        <div className="darken-bg">
            <div className="popup__container"  style={{width: popupWidth}}>
                <div className="top-bar" onClick={() => reset()}>
                    <div className="profile-banner__container">
                        <div className="profile-icon-mini">&nbsp;</div>
                        <div>
                            <div className="profile-banner__name">Megan '22</div>
                            <div className="profile-banner__star"><StarBorderIcon/><StarBorderIcon/><StarBorderIcon/><StarBorderIcon/><StarBorderIcon/></div>
                        </div>
                    </div>
                    <CloseIcon/>
                </div> 
                <CSSTransition 
                    in={popupType==="quickview"} 
                    unmountOnExit
                    timeout={500} 
                    classNames="popup"
                    onExit={calcHeight}>
                    <div className="quick-view">
                        { marked ? <BookmarkIcon className="bookmark-icon" onClick={() => setMarked(!marked)}/> : <BookmarkBorderIcon className="bookmark-icon" onClick={() => setMarked(!marked)}/> }
                        <div className="report" onClick={() => setPopupType("report")}><ReportProblemOutlinedIcon/> Report a problem</div>

                        <div className="image-container quick-view__img">
                            <img className="contain-img" src={TextbookImage}/>
                        </div>

                        <div className="quick-view__content-wrapper">

                            <div className="location-marker">{props.listing.location}</div>
                            <div className="">
                                <div className="book-title">{props.listing.title}</div>
                                <div className="book-subtitle">The Computer Science of Human Decisions</div>
                            </div>
                            <div className="">
                                <div className="book-edition">Edition {props.listing.edition}</div>
                                <div className="book-author">Authors: {props.listing.author}</div>
                                <div className="book-isbn">ISBN: {props.listing.isbn}</div>
                            </div>
                            <div className="side-by-side">
                                <div className="book-condition">“{props.listing.notes}”</div>
                                <a className="message-seller__link" href="/messages">Message Seller</a>
                            </div>
                            
                            {!offer ? 
                                <div className="popup-last-element side-by-side">
                                    <div className="book-title">${props.listing.price}.00</div>
                                            {!added ? 
                                            <div>
                                                <button className="mini-btn-medium add-to-btn" onClick={() => setAdded(!added)}>
                                                    <div className="side-by-side">
                                                        <div className="add-to-btn-text">Add To</div>
                                                        <img src={BackpackIcon}/>
                                                    </div>
                                                </button>
                                                <a className="log-in-button" onClick={() => setOffer(!offer)}>Make an Offer</a>
                                            </div>  
                                            :
                                            <button className="mini-btn-medium add-to-btn disabled">
                                                <div className="side-by-side">
                                                    <div className="add-to-btn-text">Added!</div>
                                                    <img src={BackpackIcon}/>
                                                </div>
                                            </button>
                                            }
                                                              
                                </div>
                            :
                                <div className="popup-last-element">
                                    <div className="offer-price">Current price: $50.00</div>
                                    <CSSTransition
                                        in={offerMode==="select-offer"} 
                                        unmountOnExit
                                        classNames="testest"
                                        onExit={calcOfferHeight}
                                        >

                                        <div className="offer-container offer-container-primary" id="initial-offer-box">
                                            <CloseIcon onClick={() => setOffer(!offer)}/>
                                            <div className="offer-title">Make on Offer:</div>
                                            <div className="offer-buttons">
                                                <button className={selectedOffer === 1 ? "offer-button offer-button-selected" : "offer-button"} onClick={() => setSelectedOffer(1)}>${props.listing.price - 10}</button>
                                                <button className={selectedOffer === 2 ? "offer-button offer-button-selected" : "offer-button"} onClick={() => setSelectedOffer(2)}>${props.listing.price - 5}</button>
                                                <button className={selectedOffer === 3 ? "offer-button offer-button-selected" : "offer-button"} onClick={() => setSelectedOffer(3)}>${props.listing.price - 2}</button>
                                            </div>
                                            <button className="btn-mini make-offer-button" onClick={() => setOfferMode("send-offer")}>Make offer</button>
                                            <div className="offer-link"><a  onClick={() => setOfferMode("name-offer")}>Name your price instead</a></div>
                                        </div>

                                    </CSSTransition>

                                    <CSSTransition
                                        in={offerMode==="name-offer"} 
                                        unmountOnExit
                                        classNames="testest"
                                        style={{width: offerWidth}}>

                                        <div className="offer-container offer-container-primary" id="initial-offer-box">
                                            <CloseIcon onClick={() => {setOfferMode("select-offer")}}/>
                                            <div className="offer-title">Name you price:</div>
                                            <div className="number-input-div">$<input type="number" min="1" step="1" oninput="validity.valid||(value='');"/></div>
                                            <button className="btn-mini make-offer-button" onClick={() => setOfferMode("send-offer")}>Make offer</button>
                                        </div>
                                        
                                    </CSSTransition>

                                    <CSSTransition
                                        in={offerMode==="send-offer"} 
                                        unmountOnExit
                                        timeout={500} 
                                        classNames="testest"
                                        style={{width: offerWidth}}>

                                        <div className="offer-container offer-container-secondary" >
                                            <div className="offer-price">Offer has been sent<CheckIcon/></div>
                                            <div className="offer-title">The seller will receive a notification about your offer. They will message you back about their negotiation. Keep an eye on your notifications for their response!</div>
                                        </div>
                                        
                                    </CSSTransition>
                                </div>
                            }
                        </div>
                        
                    </div>
                </CSSTransition>
                <CSSTransition 
                    in={popupType==="report"} 
                    unmountOnExit
                    timeout={500} 
                    classNames="popup-secondary"
                    style={{height: popupHeight}}
                    >
                    {!reportSubmitted ? 
                    <div className="quick-view-report">
                        <div>
                            <div>Please identifty your reason for reporting this listing:</div>
                            <select name="example" className="report-dropdown">
                                <option selected="selected" value="report-subject">Select a reason from the dropdown</option>
                                <option value="one">Technical issue</option>
                                <option value="two">Inappropriate content</option>
                                <option value="three">Listing false information</option>
                                <option value="four">Bot</option>
                                <option value="five">Other</option>
                            </select>
                            <div>Anything else you would like to tell us?</div>
                            <input type="text" placeholder="Please list any details to help us properly identify and solve this issue."/>
                        </div>
                        <div className="report-buttons">
                            <a className="dark-link" onClick={() => setPopupType("quickview")}>Cancel</a>
                            <button className="btn-mini" onClick={() => setReportSubmitted(true)}>Submit report</button>
                        </div>
                    </div>
                    :
                    <div className="quick-view-report report-submitted">
                        <div>Thank you for reporting this listing. We appreciate your input that helps keep this community safe. We will send you a confirmation email of your report number and respond to you as soon as we can. </div>
                        <a className="dark-link" onClick={() => reset()}>Back to marketplace</a>
                    </div>
                    }
                </CSSTransition>
            </div>
        </div>
    )
};

const clickOutsideConfig = {
    handleClickOutside: () => Popup.handleClickOutside,
  };
  
// export default Popup;
export default onClickOutside(Popup, clickOutsideConfig);