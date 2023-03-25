import './HostEventForm.css'
import img from "../../images/Wavy_Bus-35_Single-02.jpg"

const HostEventForm = () => {
  return (
     <>

      
      <div className="container" >
        <h1>Create your team</h1>
        <h3>Gather members to help you concure events</h3>
        
        <div className="contant">
          <div style={{display:'flex'}}>
               <div>
                    <form className="teamform_">
                         <div className="dcinput">
                              <label className="labeli"><em>*</em>Name</label>
                              <p className="hint">You can change this later</p>
                              <input className="cinput" type="text" placeholder="Name" required />
                         </div>

                         <div className="dcinput">
                              <label className="labeli"><em>*</em> Size</label>
                              <input className="cinput" type="email" placeholder="Size" required/>
                         </div>

                         <div className="dcinput">
                              <label className="labeli"><em>*</em> Description </label>
                              <p className="hint">Description</p>
                              <input className="cinput" type="email" placeholder="Description" required/>
                         </div>

                         <div className="dcinput">
                              <div className="labeli"><em>*</em> Public or Priv </div>

                              <div className="Priv_Pub label">
                                   <label htmlFor="public"><input type="checkbox" name="" className='larger privacy' id="public"/>Public</label>
                                   <label htmlFor="private"><input type="checkbox" name="" className='larger privacy' id="private"/>Private</label>                      
                              </div>
                              
                         </div>

                         <div className="dcinput">
                              <label className="labeli"><em>*</em> Sucret Name</label>
                              <p className="hint">Choose a custom URL/link that people will use to get to your hackathon. Try to keep it short, but descriptive.</p>
                              <input className="cinput" type="email" placeholder="Sucret Name" required/>
                         </div>
                    </form>
               </div>
               <div className="IMGTEam">
                    {/* <img src={img} alt="" /> */}
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

export default HostEventForm