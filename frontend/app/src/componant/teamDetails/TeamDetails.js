import React,{useState,useRef} from 'react'

import "./TeamDetails.css"
import NavBr from "../navBar/nav"

export default function TeamDetails() {
    const [open,setOpen] = useState(false);
    const iconRef = useRef();

  return (
    <div style={{margin:"7rem"}}>
        <NavBr/>

        <div className="img-page">
            {/* pic */}
        </div>    

        <div className='Parent_Div'>            
            <div className="challenge-contant11">
                <div className='head-page'>

                    <div className="info11">
                        <p className='p1'>ARCore Geospatial API Challenge</p>
                        <p className='p2'>When there is a craft we bite it.</p>
                    </div>

                </div>
                <button className='btn-join' ref={iconRef} onClick={()=>setOpen(!open)}>Join Hackathon</button>
            </div>


            <div className='Team_Info'>
                <div className="challenge-contant">
                    <p>
                        <span> MEMBERS</span><br /><br />
                        <p>
                        WAIL HAMLAOUI 
                        <br />
                        SOUDA ACHREF 
                        </p>

                    </p>
                </div>

                <div className="challenge-contant">
                    <p>
                        <span> Leader</span><br /><br />
                        <p>
                        MOUMEN BOUDIAF
                        </p>

                    </p>
                </div>
            </div>
        </div>
        
        <div className="challenge-contant">
            <p>
                <span> BUILD WORLD-SCALE, IMMERSIVE AR EXPERIENCES! </span><br /><br />
                    Augmented reality (AR) blends the physical and digital worlds - transforming the way you shop, learn, create, and experience what’s around you. With Google’s recently announced ARCore Geospatial API, developers and creators can now create and publish AR experiences in over 100 countries, without ever having to be there. This allows you to create new world-scale use cases across gaming, education, entertainment, and more.
                    We are excited to announce the ARCore Geospatial API Challenge, our latest competition where we invite you to use the ARCore Geospatial API to create a unique application for a chance at winning one of 12 available prizes, ranging in value from $1,000 to $12,000. Whether you choose to develop a unique AR experience in navigation, create an AR multiplayer game, or integrate Geospatial API in new ways, we want to see what creative and interesting AR applications you can make.
                    In addition to awarding 1st through 3rd place prizes, we are offering special bonus prizes in the following categories: navigation, gaming, entertainment, and local discovery. To get started, check out the Resources section for documentation links, more information on Geospatial API, and examples of use cases in the bonus prizes categories. Plus, if you are interested in trying out ARCore APIs that are not publicly available, follow the steps to apply to the ARCore Geospatial API Early Access Program (EAP).
                    Be sure to share your creations on Twitter and tag us using the hashtag #GeospatialAPIChallenge for a chance to be featured on @GoogleARVR!
                    We’re excited to see what you create when the world is your canvas!
            </p>
        </div>
        

    </div>
  )
}
