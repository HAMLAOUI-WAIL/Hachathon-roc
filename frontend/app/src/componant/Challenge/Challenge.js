import React,{useState,useRef} from 'react'
import img from "../../images/chalange.png"
import img3 from "../../images/Vector1.png"

import "./Challenge.css"
import Join from './Join';
import Footer from "../footer/footer"
import NavBr from "../navBar/nav"

export default function Challenge() {

    const [open,setOpen] = useState(false);
    const menuRef = useRef();
    const iconRef = useRef();

  return (
    <>
    
    <div style={{margin:"7rem"}}>
        <NavBr/>
        <div className="img-page">
            {/* pic */}
        </div>        
        <div className="challenge-contant11">
            <div className='head-page'>

                <div className="info11">
                    <p className='p1'>ARCore Geospatial API Challenge</p>
                    <p className='p2'>When there is a craft we bite it.</p>

                    <div>
                        <button className='btn-join' ref={iconRef} onClick={()=>setOpen(!open)}>Join Hackathon</button>
                         {
                            open && 
                            (
                                <Join/>
                            )
                        }
                    </div>
                </div>
                
                <div className='deadline'>
                    <div className='head11' >
                        <div className="day-left">
                            <p> 13 day left</p>
                        </div>
                        <div className="left">

                        </div>
                    </div>

                    <p>Deadline: Jan 23, 2023 @ 9:00am PST</p>

                    

                    <div className="prize ">
                        <div className="place">
                            <img src={img3} alt="" />
                            <p>Amizour</p>
                        </div>
                        <div className="place">
                            <img src={img3} alt="" />
                            <p>Public</p>
                        </div>
                        <p><span>$50,000 </span> in prizes</p>
                        <p><span>687</span> participants</p>

                    </div>
                    
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

        <div className="challenge-contant">
            <p>
                <span> REQUIREMNTS</span><br /><br />
                    What to Build 
                        Build a new app featuring the ARCore Geospatial API.

                    What to Submit
                        Include a URL to the working and published project. Access must be provided to an entrant’s working                            Application for judging and testing by providing a link to a website, functioning demo, or a published application.          The Application must be public.
                        Include a video (about 3 minutes) that explains and demonstrates your project in action. Videos must be uploaded to YouTube, Vimeo, or Facebook Video and made public.
                        Your complete submission form, including a text description of your app on Devpost before the final deadline.
            </p>
        </div>

        <div className="challenge-contant">
            <p>
                <span> JUDGING CRITERIA </span><br /><br />
                    Functionality & Purpose
                    Are you solving an existing problem? How scalable is the application? Can it be used in other regions, or can it be used by more than one type of audience? Is it an application that would encourage a user to use it more than once for its benefits?
                    Content & User Experience
                    How well executed is the application? Is it easy to use and understand? How creative is the application? What’s the visual quality like?
                    Technical Execution
                    How well are you showcasing the Geospatial API?        
            
            </p>
        </div>

        <button className='btn-join' ref={iconRef} onClick={()=>setOpen(!open)}>Join Hackathon</button>

    </div>
    <Footer/>
    </>
  )
}
