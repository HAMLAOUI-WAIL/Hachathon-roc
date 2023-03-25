import './signin.css'
import illustr1 from '../../images/Technology_Illustration-removebg-preview 1.png';
import logo from '../../images/Logo.png';
import Nav from '../../componant/navBar/nav';

function SignIn(){
       return(
              <div className='container__'>
                <Nav/>
                <div className='signin '>
                           
                         

                                   <form>
                                          
                                          <img src={logo} className="logo" alt=""/>
                                          <h1>Let’s Hack !</h1>
                                          <input type="email" placeholder="Email"/>
                                          <input type="password" placeholder="Password"/>
                                          
                                          <button className='btnSign' type="submit" >Sign in</button>

                                   </form>

                                   <img src={illustr1} className="illustration " alt=""/>



              </div>

              </div>
              


       )



}

export default SignIn;