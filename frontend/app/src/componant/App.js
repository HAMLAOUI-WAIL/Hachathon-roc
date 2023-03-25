import React from 'react'
import { BrowserRouter , Route, Routes  } from 'react-router-dom'
import '../styles/App.css';
import Challenge from './Challenge/Challenge';
import HackathonRc from './hackathonRc/HackathonRc';
import Main from './Main';
import Edit from './profile/Edit';
import Profile from './profile/Profile';
import SearchEvent from './SearchEventPage/SearchEvent';
import SearchTeam_ from './SearchTeamPage/SearchTeam_';
import {CreatTeam, HostEvent,HackathonName} from '../Pages/index'
import SignIn from "../Pages/Signin/SignIn"
import SignUp from "../Pages/Signup/SignUp"
import TeamDetails from './teamDetails/TeamDetails';



const App =()=>{
  
    return(
      
      
        
        <Routes>
          <Route path='/'  element={<Main/>}/>
          <Route exact path='/form'  element={<HackathonRc/>}/>
          <Route exact path='/profile'  element={<Profile/>}/>
          <Route exact path='/editChange'  element={<Edit/>}/>
          <Route exact path='/challenge'  element={<Challenge/>}/>
          <Route exact path='/SearchEvent'  element={<SearchEvent/>}/>
          <Route exact path='/SearchTeam'  element={<SearchTeam_/>}/>

          <Route exact path='/HostEvent'  element={<HostEvent/>}/>
          <Route exact path='/CreatTeam'  element={<CreatTeam />} />
          
          <Route exact path='/HackathonName'  element={<HackathonName />}/>

          <Route exact path='/SignUp'  element={<SignUp />}/>
          <Route exact path='/SignIn'  element={<SignIn />}/>

          <Route exact path='/DetailsTeam'  element={<TeamDetails/>}/>

        </Routes>
        
      // </BrowserRouter>
    )
  
}

export default App;