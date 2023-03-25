import './TeamForm.css'

const TeamForm = () => {
  return (
     <>
          <form className="teamform">

          <div className="dcinput">

               <label className="labeli"><em>*</em>Event name</label>
               <p className="hint">You can change this later</p>
               <input className="cinput" type="text" placeholder="Event name" required />
          </div>

          <div className="dcinput">
               <label className="labeli"><em>*</em>  Team leader</label>
               <input className="cinput" type="text" placeholder="  Team leader" required/>
          </div>     

          <div className="dcinput">
               <label className="labeli"><em>*</em> Event URL</label>
               <p className="hint">Choose a custom URL/link that people will use to get to your hackathon. Try to keep it short, but descriptive.</p>
               <input className="cinput" type="email" placeholder="Event URL" required/>
          </div>

          <div className="dcinput">
               <label className="labeli">Team image</label>
               <br></br>
               <input className="input" type="file" name="image file" title="Team image"/>
          </div>

          <div className="dcinput">
               <label className="labeli"><em>*</em> Description</label>
               <p className="hint">Create a short paragraph to describe your team.</p>
               <input className="cinput" type="password" placeholder=" Description"/>
          </div>

                                   <label className="labeli"><em>*</em> Members</label>
                                   <p className="hint">Member</p>
          <div className="flname">
                                   
                                   <input type="text" className="cinput" required />
                                   <select id="cars" className="cinputt">
                                   <option value="Designer">Designer</option>
                                   <option value="developper">developper</option>
                                   <option value="activator">activator</option>
                                   <option value="leader">leader</option>
                                   </select>
                                   <button className="cbtn"type="submit" >Add</button>
          </div>

              <button type="submit" className="save">Save</button>

          </form>
     </>
  )
}

export default TeamForm