import './HostEvent.css'
import { Header,Footer1,Nav, HostEventForm } from '../../Sections'
import HostCard from '../../Component/HostCard/HostCard'
const HostEvent = () => {
  return (
     <>

     {/* <Nav /> */}
     <Header />
     <HostCard name="Creat your own Team" />
     <HostEventForm />
     <Footer1 />
     </>
  )
}

export default HostEvent