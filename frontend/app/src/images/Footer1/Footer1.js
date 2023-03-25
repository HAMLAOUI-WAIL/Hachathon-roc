import Logo from '../../images/Logo.png'
import './Footer1.css'

export const Footer1 = () => {
  return (
     <>
      <div className="footer">
      <div className="up">
        <img src={Logo} alt="" />
        <p>HackIT</p>
      </div>
      <div className="middle">
        <ul>
          <h3>Resourses</h3>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Contact</a></li>
          <li><a href="">Blog</a></li>
          <li><a href="">Blog Post</a></li>
          <li><a href="">Pricing</a></li>
          <li><a href="">Pricing Single</a></li>
        </ul>
        <ul>
          <h3>Utility Pages</h3>
          <li><a href="">Start Here</a></li>
          <li><a href="">Style Guide</a></li>
          <li><a href="">Pasword Protect</a></li>
          <li><a href="">404 not found</a></li>
          <li><a href="">Licences</a></li>
          <li><a href="">Change Log</a></li>
        </ul>
        <ul>
          <h3>Resourses</h3>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Contact</a></li>
          <li><a href="">Blog</a></li>
          <li><a href="">Blog Post</a></li>
          <li><a href="">Pricing</a></li>
          <li><a href="">Pricing Single</a></li>
        </ul>
        <ul>
          <h3>Utility Pages</h3>
          <li><a href="">Start Here</a></li>
          <li><a href="">Style Guide</a></li>
          <li><a href="">Pasword Protect</a></li>
          <li><a href="">404 not found</a></li>
          <li><a href="">Licences</a></li>
          <li><a href="">Change Log</a></li>
        </ul>
      </div>
      <div className="down">
      <p class="copyright">
					  Copyright &copy; All rights reserved <br></br>
                           By Hackit Team
					 </p>
        <div className="siteSocials">
          <a href=""><i class="fa-brands fa-square-facebook"></i></a>
          <a href=""><i class="fa-brands fa-twitter"></i></a>
          <a href=""><i class="fa-brands fa-instagram"></i></a>
          <a href=""><i class="fa-brands fa-pinterest"></i></a>
        </div>
      </div>
    </div>
     </>
  )
}

export default Footer1