import './CreatTeam.css'
import {TeamForm} from '../../Sections/index'
import Card from '../../componant/Card/Card'
import Footer from '../../componant/footer/footer'
import Nav from '../../componant/navBar/nav'

const CreatTeam = () => {
  return (
    <>
    <Nav/>
    <Card name="Team NAME " />
    <TeamForm />
    <Footer/>
    </>
  )
}

export default CreatTeam