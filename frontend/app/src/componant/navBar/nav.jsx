import React from "react";
import Logo from '../../images/Logo.png'
import { NavLink,Link } from 'react-router-dom'
import './nav.css'
function showNav(){
  let navBar = document.getElementById("navElements")

}

export default function Nav(){
  return(
    <div className="navBar">
      <div className="navLogo">
        <img src={Logo} alt="" className="logo" />
        <p>HackIT</p>
      </div>
      <ul className="navElements" id ="navElements">
        <li><Link to={'/'}>Home</Link></li>
        <li><NavLink to={'/SearchEvent'}>Events</NavLink></li>
        <li><a href="/CreatTeam">Teams</a></li>
        <li><a href="/HostEvent">Host an event</a></li>
        <li><i class="fa-solid fa-magnifying-glass"></i></li>
      </ul>
      <div className="signButtons">
        <button ><NavLink to={'/SignIn'}>Sign In</NavLink></button>
        <button >Sign UP</button>
      </div>
      <i class="fa-solid fa-bars"></i>
    </div>
  )
}