import './HostEventForm.css'
const HostEventForm = () => {
  return (
     <>
       <form className="teamform">

     <div className="dcinput">

          <label className="labeli"><em>*</em>Team name</label>
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
     <button type="submit" className="save">Creat draft</button>
 </form>
     </>
  )
}

export default HostEventForm