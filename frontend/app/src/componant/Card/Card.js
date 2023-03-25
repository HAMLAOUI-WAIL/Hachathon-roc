import './Card.module.css' 
import bg from '../../images/Banner.png'


const Card = (props) => {
  return (
     <>
    <div className="team-card">
      <div className="CCard">

      <img className="img-card"src={bg} alt=''></img>
      <h3 className="tag">{props.name}</h3>
      </div>
    </div>
     </>
  )
}

export default Card