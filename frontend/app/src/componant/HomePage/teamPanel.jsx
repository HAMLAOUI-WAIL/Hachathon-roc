import React from "react";
import './teamPanel.css';
import data from './teamsData';
import TeamPanelComponent from "./teamPanelComponent";
import left from "../../images/left.png";
import right from "../../images/right.png";

export default function TeamPanel(props){
  const teamPanelComponents = data.map(
    dt =>
    <TeamPanelComponent
      id = {dt.id}
      img = {dt.img}
      name = {dt.name}
      leader = {dt.leader}
      discription = {dt.discription}
      members = {dt.members}
    />
  )

  return(
    <div className="teamPanelCover" id="teamPanelCover">
      <div className="teamPanel">
        <img src={left} alt="" onClick={() =>
           props.setState(MoveLayerToLeft(props.currentState))}/>
        <div className="teamComponents">
          {teamPanelComponents}
        </div>
        <img src={right} alt="" onClick={() =>
           props.setState(MoveLayerToRight(props.currentState,data.length))}/>
      </div>
      <i class="fa-sharp fa-solid fa-circle-xmark" onClick={()=> props.onClick()}></i>
    </div>
  )
}

function MoveLayerToLeft(id){
  if (id > 1){
    // move the old component with id to the right
    let component = document.getElementById("teamPanelComponent"+id);
    component.style.width = '0';
    component.style.opacity = '0';
    // grab the new one from the left
    component = document.getElementById("teamPanelComponent"+(id-1));
    component.style.width = '100%';
    component.style.opacity = '1';
    return id-1
  }
  return 1
}

function MoveLayerToRight(id,max){
  if (id < max){
    // move the old component with id to the left
    let component = document.getElementById("teamPanelComponent"+id);
    component.style.width = '0';
    component.style.opacity = '0';
    // grab the new one from the right
    component = document.getElementById("teamPanelComponent"+(id+1));
    component.style.width = '100%';
    component.style.opacity = '1';
    return id+1
  }
  return max
}