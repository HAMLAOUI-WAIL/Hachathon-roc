import React,{useRef,useState} from 'react'
import "./profile.css"
import image from "../../images/Banner.png"
import imguser from "../../images/Vector.png"
import img3 from "../../images/Vector1.png"
import img2 from "../../images/point.png"
import dots from "../../images/dots.png"
import Edit from './Edit'
import Nav from '../navBar/nav'



export default function Profile() {

    const contant = [
        {
        display:'UI/UX',
    },
    {
        display:'UI/UX',
    },
    {
        display:'UI/UX',
    },
    {
        display:'UI/UX',
    },
    
    ]

    const role = ["Homies team","Leader"]

    const [open,setOpen] = useState(false);
    const menuRef = useRef();
    const iconRef = useRef();

    // window.addEventListener("click",(e) =>{
    //     if(e.target !== menuRef.current && e.target !== iconRef.current){
    //         setOpen(true);
    //     }
    // })

  return (
    <>
    {/* <Nav/> */}
    <div className="head">
        <img
          src={image}
          className="image"
          alt="cover"
        />
        <div className="user-profile">
          <img
            src={imguser}
            className="imgP"
            alt="cover"
          />
        </div>
        <div className="info">
            
            <h2 className="name">HAMLAOUI Wail</h2>
            <h3><img src={img3} alt="" /> Setif, Algeria</h3> <br />
            
            <div className='inffo'>
                <div className="role">
                        {role.map((item,index)=>(
                            <p  key={index} >
                                <h3>{item} <img src={img2} alt=""  /></h3>   
                            </p>
                        )) } 
                        
                </div>

                 <div className='dotts'>
                   <i ref={iconRef} onClick={()=>setOpen(!open)}> <img src={dots} alt=""/></i>
                        {
                            open && 
                            (
                                <Edit/>
                            )
                        }
                </div>           
            </div>
            
        </div>
    </div>

    <div className="skills1">
        <h2>Skills</h2>
        <div className="skillsContant inffo">
            <ul className="nav_list">
                {
                    contant.map((item,index)=>(
                        <li className="nav_item" key={index} >
                            <a>{item.display}</a>
                        </li>
                    ))   
                }
            </ul>   
            <div className='dotts'>
                    {/* <i><img src={dots} alt="" ref={iconRef} onClick={()=>setOpen(!open)}/></i> */}
                         {/* { open && (<Edit/> )} */}
            </div>  
        </div>
    </div>
    
    </>
  )
}
