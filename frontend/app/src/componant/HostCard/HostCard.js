import './HostCard.css' 
import bg from '../../images/Banner.png'


const HostCard = (props) => {
  return (
     <>
    <div className="team-hostcard">
      <img className="img-hostcard"src={bg} alt=''></img>
      <h3 className="tagg">{props.name}</h3>
      <p className="tagp">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, aperiam accusamus. Id quo hic non ea eos sequi provident consequatur, veritatis accusamus minima tempore vero, consectetur et tenetur ad aut.</p>
    </div>
     </>
  )
}

export default HostCard