import React, { useState } from 'react';

import '../pages/style.css';
import '../App.css';

import NavBar from '../components/NavBarTwo.js';

import BubbleIcon03 from '../assets/bubble-icon-03.svg';
import StripeCheckout from 'react-stripe-checkout';
import Swal from "sweetalert2";

function YourBackpack() {
    const [textbookSelected, setTextbookSelected] = useState(false);
    const [marked, setMarked] = useState(false);

    const onToken = (token) => {
        console.log(token)
        Swal.fire("Purchase Successfull", "", "success")
        // fetch('/save-stripe-token', {
        //   method: 'POST',
        //   body: JSON.stringify(token),
        // }).then(response => {
        //   response.json().then(data => {
        //     alert(`We are in business, ${data.email}`);
        //   });
        // });
      }
    return (
        <div className="your-backpack">

            <div className="spacer">&nspb;</div>

            <div className="bubble-top-right">
                <img src={BubbleIcon03} />
            </div>

            <div className="marketplace__inner inner">
                <div className="marketplace-title your-backpack">
                    <h2 className="dropshadow">Your Backpack</h2>
                </div>
                <div className="backpack-item">
                    <hr />
                    <div className="two-column__container">
                        <div className="left-column">
                            <div className="backpack-item__title">“Algorithms to Live By”</div>
                            <div className="backpack-item__isbn">ISBN: 90358025823529</div>
                            <div className="profile-banner__container">
                                <div className="profile-icon-mini">&nbsp;</div>
                                <div>
                                    <div className="profile-banner__name">Megan '22</div>
                                    <div className="profile-banner__location">
                                        <div>Gainesville, FL</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right-column">
                            <div className="backpack-item__price">$50.00</div>
                            <button className="btn-mini quickview-button">Quickview</button>
                            <button className="btn-mini remove-button" style={{ backgroundColor: "#55896B" }}>Remove</button>
                        </div>
                    </div>
                </div>
                <div className="backpack-item">
                    <hr />
                    <div className="two-column__container">
                        <div className="left-column">
                            <div className="backpack-item__title">“Algorithms to Live By”</div>
                            <div className="backpack-item__isbn">ISBN: 90358025823529</div>
                            <div className="profile-banner__container">
                                <div className="profile-icon-mini">&nbsp;</div>
                                <div>
                                    <div className="profile-banner__name">Megan '22</div>
                                    <div className="profile-banner__location">
                                        <div>Gainesville, FL</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right-column">
                            <div className="backpack-item__price">$50.00</div>
                            <button className="btn-mini quickview-button">Quickview</button>
                            <button className="btn-mini remove-button" style={{ backgroundColor: "#55896B" }}>Remove</button>
                        </div>
                    </div>
                </div>
                <div>
                    <hr />
                    <div className="backpack-item">
                        <div className="side-by-side">
                            <div className="side-by-side" style={{ fontSize: "2rem" }}>
                                <div style={{ paddingRight: "4rem" }}>Total:</div>
                                <div>$85.99</div>
                            </div>
                            {/* <a href="/checkout"><button className="btn-confined">Checkout with STRIPE</button></a> */}
                            <StripeCheckout
                                name="BookMark'd"
                                description="Peer-to-Peer College Textbook Marketplace"
                                image="https://winmagictoys.com/wp-content/uploads/2018/09/dummy-logo.png" // the pop-in header image (default none)
                                ComponentClass="div"
                                panelLabel="Checkout with STRIPE"
                                amount={1000000} // cents
                                currency="USD"
                                stripeKey="pk_test_Hlzw0hXgwFKj02u3TTsBpyDb00PwLh40nb"
                                email="info@bookmarkd.com"
                                billingAddress={false}
                                // Note: enabling both zipCode checks and billing or shipping address will
                                // cause zipCheck to be pulled from billing address (set to shipping if none provided).
                                zipCode={false}
                                allowRememberMe={true} // "Remember Me" option (default true)
                                token={onToken} // submit callback
                                // Note: you can change the event to `onTouchTap`, `onClick`, `onTouchStart`
                                // useful if you're using React-Tap-Event-Plugin
                                // triggerEvent="onTouchTap"
                            >
                                <button className="btn-confined">Checkout with STRIPE</button>
                            </StripeCheckout>
                        </div>

                        <div className="side-by-side">
                            <a>Purchasing Policy</a>
                            <a>Terms & Privacy</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default YourBackpack;
