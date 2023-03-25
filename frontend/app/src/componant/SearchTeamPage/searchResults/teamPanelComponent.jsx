import React from "react";
import './teamPanelComponent.css'

export default function TeamPanelComponent(props){
  const members = props.members.map(
    member =>
    <div>{member.memberFirstName} {member.memberLastName} : {member.role}</div>
  )
  
  
  return(
    <div className="teamPanelComponent" id={"teamPanelComponent"+props.id.toString()}>
      <img src={props.img} alt="" />
      <div className="teamInfo">
        <h2 className="name">{props.name}</h2>
        <h5 className="leader">{props.leader} : Team leader</h5>
        <p className="discription">{props.discription}</p>
      </div>
      <h4>Members</h4>
      <div className="teamOrganism">
        {members}
      </div>
    </div>
  )
}