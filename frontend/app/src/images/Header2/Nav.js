import Logo from '../../images/Logo.png'
import './Nav.css'

const Nav=()=>{
  return(
    <>
    <div className="navBar">
    <div className="navLogo">
      <img src={Logo} alt="" className="logo" />
      <p>HackIT</p>
    </div>
    <ul className="navElements" id ="navElements">
      <li><a href="">Home</a></li>
      <li><a href="">Events</a></li>
      <li><a href="">Resourses</a></li>
      <li><a href="">Host an event</a></li>
      <li><i class="fa-solid fa-magnifying-glass"></i></li>
    </ul>
    <div className="signButtons">
      <button>Sign in</button>
      <button>Sign up</button>
    </div>
    <i class="fa-solid fa-bars"></i>
  </div>

    </>
    )
  }


export default Nav
