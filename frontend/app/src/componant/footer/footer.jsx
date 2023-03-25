import React from "react";
import './footer.css';
import Logo from "../../images/Logo.png";

export default function Footer(){
  return(
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
        <p>Copyright &copy; HackIT | Designed By <span>Youcef</span> Templates - Powered By <span>Khennouche</span></p> 
        <div className="siteSocials">
          <a href=""><i class="fa-brands fa-square-facebook"></i></a>
          <a href=""><i class="fa-brands fa-twitter"></i></a>
          <a href=""><i class="fa-brands fa-instagram"></i></a>
          <a href=""><i class="fa-brands fa-pinterest"></i></a>
        </div>
      </div>
    </div>
  )
}