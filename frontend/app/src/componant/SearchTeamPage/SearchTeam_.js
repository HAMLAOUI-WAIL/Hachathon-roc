import React from "react";
import { useState } from "react";
import Banner from "./banner/banner";
import Teams from "./searchResults/teams";
import TeamPanel from "./searchResults/teamPanel";
import resultsIcon from "../../images/ResultsIcon.png";
import "./SearchTeam_.css"
import Footer from "../footer/footer";
import Nav from "../navBar/nav";

export default function App(){
  const [panelState, setPanelState] = useState(0);

  return(
    <div className="containerS1">
      <Nav/>
      <Banner/>
      <div className='Results'>
        <img src={resultsIcon}/>
        <h1 >Results for {'data'}</h1>
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
  )
}


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