import React from "react";
import './teams.css';
// import img from '../images/TechnologyIllustration.png';
import teamsData from './teamsData';
import Team from "./team";


export default function Teams(props){
  // list of the teams 
  const teams = teamsData.map(
    data =>
    <Team
      id = {data.id}
      img = {data.img}
      name = {data.name}
      leader = {data.leader}
      discription = {data.discription}
      facebook = {data.facebook}
      twitter = {data.twitter}
      instagram = {data.instagram}
      onClick = {(id) => props.onClick(id)}
    />
  )
  
  return(
    <div className="teams">
      {teams}
    </div>
  )
}









