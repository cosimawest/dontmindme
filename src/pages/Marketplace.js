import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import '../pages/style.css';
import '../App.css';

import BookCard from '../components/BookCard.js';
import Dropdown from '../components/Dropdown.js';
import Popup from '../components/Popup.js';
import Footer from '../components/Footer.js';



import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined';

import TextbookImage from '../assets/test-textbook-image.png';
const Listings = require('../data/Listings.json');



function Marketplace() {
  const [textbookSelected, setTextbookSelected] = useState(false);
  const [popupType, setPopupType] = useState("quickview");


    
  const showBookCards = () => {
      return (
        Listings.Listings.map((item) => (
            <BookCard
                id={item.id}
                image={TextbookImage}
                title={item.title}
                author={item.author}
                price={item.price}
                textbookSelected={textbookSelected}
                setTextbookSelected={setTextbookSelected}
            />   
        ))
      );
  }


  return (
    <div className="marketplace">

        {textbookSelected && (
            <Popup
                isOpen={textbookSelected}
                setIsOpen={setTextbookSelected}
                type={popupType}
                setPopupType={setPopupType}
                listing={Listings.Listings[textbookSelected-1]}
            />  
        )}


        <div className="spacer">&nspb;</div>
        <div className="marketplace-title">
            <h2 className="dropshadow">Marketplace</h2>
        </div>

        <div className="marketplace__inner inner">
            <div className="search-bar__container-outer">
                <div className="search-bar__container">
                    <input 
                        className="search-input"
                        type="text"
                        placeholder="Search by ISBN, Book Title, Author, Class"
                    />
                    <SearchIcon className="search-icon"/>
                </div>
            </div>

            <div className="sort-and-filter__container">

                <Dropdown title={<div style={{display: "flex"}}>Filter By <ExpandMoreIcon/></div>}>
                    <div className="drop-down__container">
                        <div className="filter-item">
                            <input id="price" name="price" type="checkbox"/>
                            <label for="price">Price Negotiable</label>
                        </div>
                        
                        <div className="filter-item">
                            <input id="new" name="new" type="checkbox"/>
                            <label className="filter-item__new" for="new">New</label>
                            
                            <input id="used" name="used" type="checkbox"/>
                            <label for="used">Used</label>
                        </div>

                        <div className="filter-item seller-rating">
                            Seller Rating: 
                            <StarBorderIcon/>
                            <StarBorderIcon/>
                            <StarBorderIcon/>
                            <StarBorderIcon/>
                            <StarBorderIcon/>
                        </div>

                        <div className="filter-item">
                            <input id="distance" name="distance" type="checkbox"/>
                            <label for="distance">Distance</label>
                        </div>
                    </div>
                </Dropdown>

                <Dropdown title={<div style={{display: "flex"}}>Sort By <ExpandMoreIcon/></div>}>
                    <div className="drop-down__container drop-down-right">
                        <div>Relevance</div>
                        <div>Price Low to High</div>
                        <div>Price High to Low</div>
                        <div>Ratings High to Low</div>
                    </div>
                </Dropdown>
            </div>

            <div className="book-card__container">
                {showBookCards()}
            </div>

        </div>
        <Footer/>
    </div>
  );
}

export default Marketplace;
