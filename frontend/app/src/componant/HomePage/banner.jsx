import React from "react";
import './banner.css'

export default function Banner(){
  return(
    <div className="bannerHome">
      <div className="textBox">
        <h1>All In One Hackathons Management Solution For Students</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>
      <button className="creatAcountButton">
        Creat Free Account
      </button>
      <div className="searchField">
        <input type="search" placeholder="Find your next hackathon" />
        <button className="searchButton" >search Hackathons</button>
      </div>
    </div>
  )
}