import React from "react";
import './team.css'

export default function Team(props){
  return (
    <div className="team" onClick={() =>props.onClick(props.id)}>
      <img src={props.img} alt="" />
      <div className="teamInfo">
        <h2 className="name">{props.name}</h2>
        <h5 className="leader">{props.leader}</h5>
        <p className="discription">{props.discription}</p>
        <div className="social">
          <a href={props.facebook}><i class="fa-brands fa-square-facebook"></i></a>
          <a href={props.twitter}><i class="fa-brands fa-twitter"></i></a>
          <a href={props.instagram}><i class="fa-brands fa-instagram"></i></a>
        </div>
      </div>
    </div>
  )
}