import React from "react";
import './card.css'

export default function Card(props){
  return (
    <div className="card">
      <img src={props.img} alt="" />
      <div className="stats">
        <div className="location"><span>{props.location}</span></div>
        <div className="participants"><span>{props.eventType}</span></div>
      </div>
      <div className="times">
        <p className="date">{props.date}</p>
        <p className="timeLeft">{props.timeLeft} days left</p>
      </div>
      <h4>{props.title}</h4>
      <p>{props.discription}</p>
      <a href={props.page}><span>View more</span></a>
    </div>
  )
}