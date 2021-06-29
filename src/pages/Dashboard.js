import React, { useState } from 'react';

import '../pages/style.css';
import '../App.css';

import Footer from '../components/Footer.js';
import NavBar from '../components/NavBarTwo.js';
import BookCard from '../components/BookCard.js';
import ProfileBannerR from '../components/ProfileBannerR.js';



import BubbleIcon03 from '../assets/bubble-icon-03.svg';
import SendIcon from '@material-ui/icons/Send';
import AddIcon from '@material-ui/icons/Add';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import SearchIcon from '@material-ui/icons/Search';



import YourOrdersIcon from '../assets/your-orders-icon.svg';
import InboxIcon from '../assets/inbox-icon.svg';
import YourListingsIcon from '../assets/your-listings-icon.svg';
import NotifsIcon from '../assets/notifs-icon.svg';
import YourRatingsIcon from '../assets/your-ratings-icon.svg';
import YourBookmarksIcon from '../assets/your-bookmarks-icon.svg';
import FollowingIcon from '../assets/following-icon.svg';
import RecentlyViewedIcon from '../assets/recently-viewed-icon.svg';



const profile = {
    "year": 22,
    "name": "Michael",
    "username": "michaelh224",    
};


function Dashboard() {
  const [textbookSelected, setTextbookSelected] = useState(false);
  const [marked, setMarked] = useState(false);



  return (
    <div className="profile">
        <div className="profile-inner">
        <div className="spacer"></div>

        <div className="bubble-top-right">
            <img src={BubbleIcon03}/>
        </div>

        <div className="profile-top__inner inner">
            <h2 class="dropshadow">My Dashboard</h2>
        </div>

        <ProfileBannerR 
            profile={profile}
        />

        <div className="profile-bottom">

            <div className="profile-bottom__inner inner">
                <div className="user-profile-info">
                    <a className="dark-link"  href="/dashboard/personal-info">Personal Info</a>
                    <hr/>
                    <a className="dark-link" href="/dashboard/security">Security</a>
                    <hr/>
                    <a className="dark-link" href="/dashboard/payment-info">Payment Info</a>
                    <hr/>
                </div>
                <div className="user-profile-content">
                    <div className="book-card__container">
                        <a className="dashboard-card none" href="/dashboard/orders">
                            <h5>Your Orders</h5>
                            <img src={YourOrdersIcon}/>
                        </a>
                        <a className="dashboard-card none" href="/messages">
                            <h5>Inbox</h5>
                            <img src={InboxIcon}/>
                        </a>
                        <a className="dashboard-card none" href="/dashboard/listings">
                            <h5>Your Listings</h5>
                            <img src={YourListingsIcon}/>
                        </a>
                        <a className="dashboard-card none" href="/dashboard/notifs">
                            <h5>Notifications</h5>
                            <img src={NotifsIcon}/>
                        </a>
                        <a className="dashboard-card none" href="/dashboard/ratings">
                            <h5>Your Ratings</h5>
                            <img src={YourRatingsIcon}/>
                        </a>
                        <a className="dashboard-card none" href="/dashboard/bookmarks">
                            <h5>Your Bookmarks</h5>
                            <img src={YourBookmarksIcon}/>
                        </a>
                        <a className="dashboard-card none" href="/dashboard/following">
                            <h5>Following</h5>
                            <img src={FollowingIcon}/>
                        </a>
                        <a className="dashboard-card none" href="/dashboard/recently-viewed">
                            <h5>Recently Viewed</h5>
                            <img src={RecentlyViewedIcon}/>
                        </a>
                    </div>
                </div>
            </div>
            <Footer/>

        </div>
        </div>
    </div>
  );
}

export default Dashboard;
