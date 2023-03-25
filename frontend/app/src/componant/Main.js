import React from 'react';
import { useState } from "react";
import '../styles/Main.css';
import Nav from '../componant/navBar/nav';
import Banner from '../componant/HomePage/banner';
import Grid from '../componant/HomePage/grid';
import teamsIcon from '../images/teamsIcon.png';
import Teams from '../componant/HomePage/teams';
import hackathonsIcon from '../images/hackathonsIcon.png';
import Footer from '../componant/footer/footer';
import TeamPanel from '../componant/HomePage/teamPanel';

function Main() {
  const [panelState, setPanelState] = useState(0);
  // alert(panelState)

  return (
    <div className="container__" id='container__'>
      <Nav/>
      <Banner/>
      <div className='Header__ hackathonsHeader__'>
        <img src={hackathonsIcon}/>
        <h1 >Events for you</h1>
      </div>
      <Grid/>
      <div className='Header__ teamsHeader__'>
        <img src={teamsIcon} />
        <h1 >Teams for you</h1>
      </div>
      <Teams onClick={(id) => {
        setPanelState(id);
        ShowPanel(id);
        }}/>
      <TeamPanel 
      currentState = {panelState} 
      setState = {(newState) => setPanelState(newState)}
      onClick = {() =>{ 
        setPanelState(0);
        hidePanel(panelState);
        }
      }
      />
      <Footer/>
    </div>
  );
}

export default Main;


function ShowPanel(id){
  let component = document.getElementById('teamPanelCover');
  component.style.left = "0";
  component = document.getElementById('teamPanelComponent'+id);
  component.style.width = "100%"
  component.style.opacity = "1"; 
}

function hidePanel(currentState){
  let component = document.getElementById('teamPanelComponent'+currentState);
  component.style.opacity = "0"
  component.style.width = '0';
  component = document.getElementById('teamPanelCover');
  component.style.left = '-100%';
}

