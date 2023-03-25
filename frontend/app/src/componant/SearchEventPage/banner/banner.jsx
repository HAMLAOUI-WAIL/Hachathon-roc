import React from "react";
import BackGround from '../../../images/BannerBackGround.png';
import './banner.css';
export default function Banner(){
  return(
    <header className="bannerEventPage">
      <div className="banner">
        Join the world's best online and in-person hackathons
      </div>
      <div className="searchField">
        <label htmlFor="TypesList">Type</label>
        <input list="Types" name="TypesList" id="TypesList" />
        <datalist id="Types">
          <option value="Design"></option>
          <option value="Design"></option>
          <option value="Design"></option>
          <option value="Design"></option>
        </datalist>
        <input type="search" name="Search" id="Search" placeholder="Find your next Hackathon"/>
        <input type="submit" value="search" id="searchButton"/>
      </div>
    </header>
  )
}