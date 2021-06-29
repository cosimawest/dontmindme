import React, { useState } from 'react';

import '../pages/style.css';
import '../App.css';

import Footer from '../components/Footer.js';
import NavBar from '../components/NavBarTwo.js';

import BubbleIcon03 from '../assets/bubble-icon-03.svg';
import BackArrow from '../assets/back-arrow.svg';



function PaymentInfo(props) {
  const [textbookSelected, setTextbookSelected] = useState(false);
  const empty = false; // temp variable to switch between empty and non-empty states of this page

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
                    <h3>Payment Info</h3>
                </div>         
            </div>

            <form className="my-dashboard__inner inner">
                <div className="dashboard-info-form-section">
                    <div className="dashboard-info-form-title">Billing Info</div>
                    <div className="dashboard-info-form-outer">
                        <div className="dashboard-info-form">
                            <tr>
                                <td className="dashboard-info-form-label"><label>Name on card:</label></td>
                                <td className="dashboard-info-form-input"><input placeholder="Michael Gold" type="text"/></td>
                            </tr>
                            <tr>
                                <td className="dashboard-info-form-label"><label>Address:</label></td>
                                <td className="dashboard-info-form-input"><input type="text"/></td>
                            </tr>                  
                        </div>
                        <div className="flex-right">
                            <button type="submit">Save changes</button>
                        </div>
                    </div>
                </div>
              </form>
              
              <form className="my-dashboard__inner inner">
                <div className="dashboard-info-form-section">
                    <div className="dashboard-info-form-title">Cards on File</div>
                    <div className="dashboard-info-form-outer">
                        <div className="dashboard-info-form">
                            <div className="side-by-side card-info-container">
                                <div className="">
                                    <div>Mastercard *1234</div>
                                    <div className="empty-state-title">Exp. Date: 03/24</div>
                                </div>
                                <div className="card-info-input">
                                    <label className="empty-state-title">Use as primary <br/>payment card</label>
                                    <input type="checkbox" className=""/>
                                </div>
                            </div>
                            <div className="side-by-side card-info-container">
                                <div className="">
                                    <div>Mastercard *1234</div>
                                    <div>Exp. Date: 03/24</div>
                                </div>
                                <div className="card-info-input">
                                    <label className="empty-state-title">Use as primary <br/>payment card</label>
                                    <input type="checkbox" className=""/>
                                </div>                            
                            </div>
                        </div>
                        <div className="flex-right">
                            <button type="submit">Save changes</button>
                        </div>
                    </div>
                </div>
            </form>
            
            <Footer/>
        </div>      
        </div>
  );
}

export default PaymentInfo;
