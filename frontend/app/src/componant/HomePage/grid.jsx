import React from "react";
import Card from "./card";
import './grid.css';
import cardsData from './cardsData'

export default function Grid(){
  const cards = cardsData.map(
    data =>
    <Card
      title = {data.title}
      discription = {data.discription}
      img = {data.img}
      location = {data.location}
      eventType = {data.eventType}
      date = {data.date}
      timeLeft = {data.timeLeft}
      page = {data.page}
    />
  )
  return(
    <div className="gridCards">
      {cards}
    </div>
  )
}