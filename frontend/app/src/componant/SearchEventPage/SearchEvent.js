import React from 'react'
import "./SearchEvent.css"

import Banner from "./banner/banner";
import Grid from "./searchResults/grid";
import resultsIcon from "../../images/ResultsIcon.png";
import Nav from '../navBar/nav';
import Footer from '../footer/footer';

export default function SearchEvent() {
  return (
    <div className="containerEv">
        <Nav/>
        <Banner/>
        <div className='Results'>
            <img src={resultsIcon}/>
            <h1 >Results for {'data'}</h1>
        </div>
        <Grid/>
        <Footer/>
  </div>
  )
}
