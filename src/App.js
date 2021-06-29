import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect, HashRouter } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar.js';
import NavBar2 from './components/NavBarTwo.js';


import Home from './pages/Home.js';
import LogIn from './pages/LogIn.js';
import Marketplace from './pages/Marketplace.js';
import YourBackpack from './pages/YourBackpack.js';
import Checkout from './pages/Checkout.js';
import Messages from './pages/Messages.js';
import Profile from './pages/Profile.js';
import Dashboard from './pages/Dashboard.js';
import YourBookmarks from './pages/YourBookmarks.js';
import YourFollowing from './pages/YourFollowing.js';
import YourListings from './pages/YourListings.js';
import NewListing from './pages/NewListing.js';
import YourNotifs from './pages/YourNotifs.js';
import YourOrders from './pages/YourOrders.js';
import YourRatings from './pages/YourRatings.js';
import YourRatingsSingle from './pages/YourRatingsSingle.js';
import YourRecent from './pages/YourRecent.js';
import PersonalInfo from './pages/PersonalInfo.js';
import Security from './pages/Security.js';
import PaymentInfo from './pages/PaymentInfo.js';
import TheTeam from './pages/TheTeam.js';
import Careers from './pages/Careers.js';
import Partners from './pages/Partners.js';
import Blog from './pages/Blog.js';
import FAQ from './pages/FAQ.js';
import Events from './pages/Events.js';
import InviteAFriend from './pages/InviteAFriend.js';

import NotFound from './pages/NotFound.js';

import Footer from './components/Footer.js';


import { MyChatWidget } from "./components/MyChatWidget/MyChatWidget";
import Sound from 'react-sound';
import { BASE_URL } from "./config/";
import socketIOClient from "socket.io-client";

function App() {
  const socket = socketIOClient(BASE_URL);
  const [loggedIn, setLoggedIn] = useState(false);
  const [mode, setMode] = useState("home");
  const [newMessage, setNewMessage] = useState("");
  const [play, setPlay] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("USERID"))
      localStorage.setItem("USERID", "USER" + new Date().getTime());
    socket.emit('join', { userid: localStorage.getItem("USERID") });
    socket.on("chats", (data) => {
      setPlay(true)
      setNewMessage(data);
    });
  }, []);

  return (
    <div className="App">

      <HashRouter>
        {!loggedIn ? <NavBar setMode={setMode} /> : <NavBar2 />}

        <Switch>
          <Route exact path="/main-home" render={(props) => <Home />} />
          <Route exact path="/log-in" render={(props) => <LogIn mode={mode} setMode={setMode} setLoggedIn={setLoggedIn} />} />
          <Route exact path="/marketplace" render={(props) => <Marketplace {...props} />} />
          <Route exact path="/your-backpack" render={(props) => <YourBackpack {...props} />} />
          <Route exact path="/checkout" render={(props) => <Checkout {...props} />} />
          <Route exact path="/messages" render={(props) => <Messages {...props} />} />
          <Route exact path="/profile/:id" render={(props) => <Profile {...props} />} />
          <Route exact path="/dashboard" render={(props) => <Dashboard {...props} />} />
          <Route exact path="/dashboard/bookmarks" render={(props) => <YourBookmarks {...props} />} />
          <Route exact path="/dashboard/following" render={(props) => <YourFollowing {...props} />} />
          <Route exact path="/dashboard/listings" render={(props) => <YourListings {...props} />} />
          <Route exact path="/dashboard/notifs" render={(props) => <YourNotifs {...props} />} />
          <Route exact path="/dashboard/orders" render={(props) => <YourOrders {...props} />} />
          <Route exact path="/dashboard/ratings/" render={(props) => <YourRatings {...props} />} />
          <Route exact path="/dashboard/ratings/:id" render={(props) => <YourRatingsSingle {...props} />} />
          <Route exact path="/dashboard/recently-viewed" render={(props) => <YourRecent {...props} />} />
          <Route exact path="/dashboard/personal-info" render={(props) => <PersonalInfo {...props} />} />
          <Route exact path="/dashboard/security" render={(props) => <Security {...props} />} />
          <Route exact path="/dashboard/payment-info" render={(props) => <PaymentInfo {...props} />} />
          <Route exact path="/the-team" render={(props) => <TheTeam {...props} />} />
          <Route exact path="/careers" render={(props) => <Careers {...props} />} />
          <Route exact path="/partners" render={(props) => <Partners {...props} />} />
          <Route exact path="/blog" render={(props) => <Blog {...props} />} />
          <Route exact path="/faq" render={(props) => <FAQ {...props} />} />
          <Route exact path="/events" render={(props) => <Events {...props} />} />
          <Route exact path="/invite-a-friend" render={(props) => <InviteAFriend {...props} />} />
          <Route exact path="/new-listing" render={(props) => <NewListing {...props} />} />

          <Route exact path="/">
            <Redirect to="/main-home" />
          </Route>
          <Route component={NotFound} />

        </Switch>
      </HashRouter>

      {/* <NavBar/>
        <div className="spacer">&nspb;</div>
        <Home/> */}
      {/* <Footer/> */}
      <MyChatWidget newMessage={newMessage} />
      <Sound
        url={"https://www.stockringtone.com/download/messages-ringtones/4108/Sms_Tone_Mp3_Ringtone"}
        playStatus={play ? Sound.status.PLAYING : Sound.status.STOPPED}
        onFinishedPlaying={() => setPlay(false)}
      />
    </div>
  );
}

export default App;
