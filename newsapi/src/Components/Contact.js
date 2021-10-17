import React ,{useState }from 'react';
import { NavLink } from 'react-router-dom';

function Contact() {
    const [user,setUser]=useState({
        name:"",
        email:"",
        password:"",
        mobile:"",
        
    });


    const {name,email,mobile,}=user;
    const onInputChange=e=>{
        setUser({...user,[e.target.name]:e.target.value} );
    };


    const onsubmit=(e)=>{
        e.preventDefault();
    }

    const submit=(e)=>{
        setUser(e.target.value)
    }
    return (
        <div className="container my-5">
           
            <div className="row">
                

                    <div className="row">
                        <div className="col-md-6  mx-auto">
                            <h2>Contact  </h2>
                            <form onSubmit={onsubmit}>
                           
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Name</label>
                                <input type="text" required ="required" name="name" value={name} onChange={e=>onInputChange(e)} className="form-control" id="exampleFormControlInput1" placeholder="Name"   />
                        
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" name="email" required ="required" required ="required" value={email} onChange={e=>onInputChange(e)}  className="form-control" id="exampleFormControlInput1" placeholder="Email" />
                              
                            </div>

                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Number</label>
                                <input type="text" required ="required" name="mobile" value={mobile}  onChange={e=>onInputChange(e)}  className="form-control" id="exampleFormControlInput1" placeholder="mobile"  />
                            </div>

                            <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control" placeholder="type something" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
                        

                            <div className="mb-3">
                                
                             <NavLink  exact to= "/" >   <button className="btn btn-primary" onClick={submit}> Submit</button>
                               </NavLink>
                              
                                </div>
                               
                               
                                </form>
                        </div>
                    
            
             

                    </div>
                </div>

            </div>

    )
}

export default Contact
