import React from 'react'
import "./HackathonRc.css"

class HackathonRc extends React.Component {

  // constructor(props){
  //   super(props)
  //   this.state = {
  //     skills : '',
  //     location : '',
  //     school :'',
  //     option : false
  //   }

  //   this.handleChange = this.handleChange.bind(this)
    
  // }

  // handleChange(e){
  //   const skills = e.target.skills
  //   const school = e.target.school
  //   const location = e.target.location

  //   this.setState({
  //     [skills]: value,
  //     [school]: value,
  //     [location]: value

  //   })
  // }

 render(){
  return (
    <>
    <div className="container">
        <h1>Hackathon recommendations</h1>
        <h3>We'll use this to connect you with hackathons and more.</h3>

        <div className="contant">
          <div className="form-box">
            <h1>Preferences</h1>
            <div className="speciality pad">
              
              <h2><span>*</span> What are your specialty?</h2>
              <div className="label">
                <label htmlFor="" ><input type="checkbox" name="" id="option" className='larger'/>Full-stack developer</label>
                <label htmlFor="" ><input type="checkbox" name="" id="option" className='larger'/>Front-end developer</label>
                <label htmlFor="" ><input type="checkbox" name="" id="option" className='larger'/>Back-end developer</label>
                <label htmlFor="" ><input type="checkbox" name="" id="option" className='larger'/>Mobile developer</label>
                <label htmlFor="" ><input type="checkbox" name="" id="option" className='larger'/>Full-stack developer</label>
                <label htmlFor="" ><input type="checkbox" name="" id="option" className='larger'/>Full-stack developer</label>
                <label htmlFor="" ><input type="checkbox" name="" id="option" className='larger'/>Full-stack developer</label>
                <label htmlFor="" ><input type="checkbox" name="" id="option" className='larger'/>Full-stack developer</label>
                <label htmlFor="" ><input type="checkbox" name="" id="option" className='larger'/>other</label>                
              </div>
              
            </div>

            <div className="skills pad">
              <h2><span>*</span> What are your skills?</h2>
              <input type="text" placeholder='Language, Database, Framworks, APIs' id='txt' style={{marginLeft:'17px'}} />
            </div>

            <div className="hack_type pad">
              <h2><span>*</span> What types of hackathons are you interested in?</h2>
              <div className="label">
              <label htmlFor="" ><input type="checkbox" name="" className='larger' id="option"/>option</label>
              <label htmlFor="" ><input type="checkbox" name="" className='larger' id="option"/>option</label>
              <label htmlFor="" ><input type="checkbox" name="" className='larger' id="option"/>option</label>
              <label htmlFor="" ><input type="checkbox" name="" className='larger' id="option"/>option</label>
              <label htmlFor="" ><input type="checkbox" name="" className='larger' id="option"/>option</label>
              <label htmlFor="" ><input type="checkbox" name="" className='larger' id="option"/>option</label>
              <label htmlFor="" ><input type="checkbox" name="" className='larger' id="option"/>option</label>
              <label htmlFor="" ><input type="checkbox" name="" className='larger' id="option"/>option</label>
              <label htmlFor="" ><input type="checkbox" name="" className='larger' id="option"/>option</label>
              <label htmlFor="" ><input type="checkbox" name="" className='larger' id="option"/>option</label>
              <label htmlFor="" ><input type="checkbox" name="" className='larger' id="option"/>option</label>
              <label htmlFor="" ><input type="checkbox" name="" className='larger' id="option"/>option</label>
              <label htmlFor="" ><input type="checkbox" name="" className='larger' id="option"/>option</label>
              <label htmlFor="" ><input type="checkbox" name="" className='larger' id="option"/>option</label>
              <label htmlFor="" ><input type="checkbox" name="" className='larger' id="option"/>option</label>
              <label htmlFor="" ><input type="checkbox" name="" className='larger' id="option"/>option</label>
              <label htmlFor="" ><input type="checkbox" name="" className='larger' id="option"/>option</label>
              <label htmlFor="" ><input type="checkbox" name="" className='larger' id="option"/>option</label>
              </div> 
            </div>

          </div>

          <div className="form-box">
            <h1>Eligibility</h1>
            <div className="location pad">
              <h2><span>*</span> Location</h2>
              <input type="text" placeholder='Enter a location' id='txt' style={{marginLeft:'17px'}}  />
            </div>

            <div className="occupation pad">
              <h2><span>*</span> Occupation</h2><br />
              <label htmlFor="" ><input type="checkbox" name="" className='larger' id="option"/>Student</label>
              <label htmlFor="" ><input type="checkbox" name="" className='larger' id="option"/>Post Grade/Proffesional</label>


            </div>

            <div className="level pad">
              <h2><span>*</span> Current student level</h2> <br />
              <label htmlFor="" ><input type="checkbox" name="" className='larger' id="option"/>High School</label>
              <label htmlFor="" ><input type="checkbox" name="" className='larger' id="option"/>Middle School</label>


            </div>

            <div className="info pad" style={{marginLeft:'-2px'}}>
              <div className="school">
                <h2><span>*</span> School name</h2>
                <input type="text" placeholder='School name' id='txtSC' style={{marginLeft:'17px'}} />
              </div>
              <div className="graduation">
                <h2><span>*</span> Graduation month</h2>
                <div>
                  <select name="Month" id="Month" placeholder='Month' style={{marginRight:'.1rem'}}>
                    <option value="Month">Month</option>
                    <option value="Month">Month</option>
                  </select>
                  <select name="Year" id="Year" placeholder='Year'>
                    <option value="Year">Year</option>
                    <option value="Year">Month</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="birth pad">
              <h2><span>*</span> Birth month</h2>
              <select name="Month" id="Month" placeholder='Month' style={{marginRight:'.1rem'}}>
                  <option value="Month">01</option>
                  <option value="Month">02</option>
                  <option value="Month">03</option>
                  <option value="Month">04</option>
                  <option value="Month">05</option>
                  <option value="Month">06</option>
                  <option value="Month">07</option>
                  <option value="Month">08</option>
                  <option value="Month">09</option>
                  <option value="Month">10</option>
                  <option value="Month">11</option>
                  <option value="Month">12</option>
                </select>
                <select name="Year" id="Year" placeholder='Year'>
                  <option value="Year">Year</option>
                  <option value="Year">Year</option>
                </select>
              <h3 style={{color:'#2D2D2D',letterSpacing:'.2px',margin:'14px'}}>Most hackathons have age requirements</h3>
            </div>

          </div>

          
          <div>
             <button className="form-btn">Continue</button>
          </div>

          <div >
            
          </div>

        </div>

    </div>
    </>
  )
 }
}

export default HackathonRc;