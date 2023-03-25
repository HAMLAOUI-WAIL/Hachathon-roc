import './HostEvent.css'
import {HostEventForm } from '../../Sections'
import HostCard from '../../componant/HostCard/HostCard'
import Nav from '../../componant/navBar/nav'
import Footer from '../../componant/footer/footer'
const HostEvent = () => {
  return (
     <>

     <div style={{
      margin:'0rem 5rem',
      // width:'100vw',
     }}>    <Nav/>
          <HostEventForm />
     </div>
     </>
  )
}

export default HostEvent