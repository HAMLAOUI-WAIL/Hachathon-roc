import './HackathonName.css'
import {  HackathonForm} from '../../Sections'
import Card from '../../componant/Card/Card'
import Footer from '../../componant/footer/footer'
import Nav from '../../componant/navBar/nav'


const HackathonName = () => {
  return (
     <>
     <Nav/>
     <Card name="Hackathon name" />
     <HackathonForm />
     <Footer/>
     </>
  )
}

export default HackathonName