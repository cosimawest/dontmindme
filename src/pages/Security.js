import React, { useState } from 'react';

import '../pages/style.css';
import '../App.css';

import Footer from '../components/Footer.js';
import NavBar from '../components/NavBarTwo.js';

import BubbleIcon03 from '../assets/bubble-icon-03.svg';
import BackArrow from '../assets/back-arrow.svg';



function Security(props) {
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
                    <h3>Security</h3>
                </div>         
            </div>

            <form className="my-dashboard__inner inner">
                <div className="dashboard-info-form-section">
                    <div className="dashboard-info-form-title">Account Password</div>
                    <div className="dashboard-info-form-outer">
                        <div className="dashboard-info-form">
                            <tr>
                                <td className="dashboard-info-form-label"><label>Username</label></td>
                                <td className="dashboard-info-form-input"><input placeholder="exampleusername" type="text"/></td>
                            </tr>
                            <tr>
                                <td className="dashboard-info-form-label"><label>New password:</label></td>
                                <td className="dashboard-info-form-input"><input type="text"/></td>
                            </tr>  
                            <tr>
                                <td className="dashboard-info-form-label"><label>Confirm new password:</label></td>
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
                          <div className="display-info-label">Please de-select any information you do not want displayed publicly on your profile.</div>
                            <div className="display-info-container">
                                <div className="card-info-input">
                                    <label className="empty-state-title">Profile picture</label>
                                    <input type="checkbox" className=""/>
                                </div>
                                <div className="card-info-input">
                                    <label className="empty-state-title">Major</label>
                                    <input type="checkbox" className=""/>
                                </div>
                                <div className="card-info-input">
                                    <label className="empty-state-title">Last name</label>
                                    <input type="checkbox" className=""/>
                                </div>
                                <div className="card-info-input">
                                    <label className="empty-state-title">Location</label>
                                    <input type="checkbox" className=""/>
                                </div>
                                <div className="card-info-input">
                                    <label className="empty-state-title">Graduation year</label>
                                    <input type="checkbox" className=""/>
                                </div>
                                <div className="card-info-input">
                                    <label className="empty-state-title">Interests</label>
                                    <input type="checkbox" className=""/>
                                </div>
                                <div className="card-info-input">
                                    <label className="empty-state-title">University</label>
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

export default Security;
