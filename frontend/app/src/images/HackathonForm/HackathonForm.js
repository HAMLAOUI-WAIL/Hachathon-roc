import './HackathonForm.css'

const HackathonForm = () => {
  return (
     <>
          <form className="teamform">

     <div className="dcinput">

          <label className="labeli"><em>*</em> Event name</label>
          <input className="cinput" type="text" placeholder="Event name" required />
     </div>
     <div className="flname">
                              <label className="labeli"><em>*</em> Event Type</label>
                              <select id="cars" className="cinputt">
                              <option value="Designer">Hackathon</option>
                              <option value="developper">Datathon</option>
                              <option value="activator">bootCamp</option>
                              </select>
     </div>


    
     <div className="dcinput">

          <label className="labeli"><em>*</em> Event URL</label>
          <p className="hint">URL event</p>
          <input className="cinput" type="text" placeholder="Event url" required />
     </div>
     <div className="flname">
                              <label className="labeli"><em>*</em>  Event Them</label>
                              <select id="cars" className="cinputt">
                              <option value="Designer">Option</option>
                              <option value="developper">Option</option>
                              <option value="activator">Option</option>
                              </select>
     </div>
     <div className="dcinput">
          <label className="labeli"><em>*</em> When does your hackathon submission period begin ?</label>
          <input className="cinput" type="date" placeholder=" " required/>
     </div>     
     <div className="dcinput">

          <label className="labeli"><em>*</em> Host</label>
          <p className="hint">the organisation hosting the event </p>
          <input className="cinput" type="text" placeholder="Event name" required />
     </div>
     <div className="dcinput">

          <label className="labeli"><em>*</em> Location Adress</label>
          <input className="cinput" type="text" placeholder="Event name" required />
     </div>
     
     <button type="submit" className="save">Save</button>

     </form>

     </>

  )
}

export default HackathonForm