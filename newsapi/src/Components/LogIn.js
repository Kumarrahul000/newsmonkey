import React, {useState}from 'react';
import { BrowserRouter as Router, NavLink} from "react-router-dom";

import { useHistory } from 'react-router-dom';


const LogIn = () => {
    const [user,setUser]=useState({
     
        email:"",
        password:"",
       
    })

    const {email,password}=user;
    const onInputChange=e=>{
        setUser({...user,[e.target.name]:e.target.value});
    };

const history=useHistory();

  
async function  submit(){
       

    let result=   await fetch('https://ttmg-backend.herokuapp.com/api/auth/staffLogin',{

   method:'post',
   body:JSON.stringify(user),
   headers: {

            'Content-Type': 'application/json',
            'Accept': 'application/json'
    
          }
        

    })
result= await result.json()
.then((result) => {
    history.push("/")
  
console.warn("result",result)
 localStorage.getItem("user-info",JSON.stringify(result));


}
)}

    return (
        <div className="container my-5">
            <div className="row">
                <div style={{ backgroundImage: `url(${"./images/background-img.png"})`, height: "430px", width: "800px", }} className="col-md-8 offset-2 shadow">

                    <div className="row">
                        <div className="col-md-6  mx-auto">
                            <h2>Log In  </h2>
                            
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" required ="required" name="email" value={email} onChange={e=>onInputChange(e)}  className="form-control" id="exampleFormControlInput1" placeholder="Email" />
                            </div>

                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Password</label>
                                <input type="password" required ="required"  name="password" value={password} onChange={e=>onInputChange(e)}  className="form-control" id="exampleFormControlInput1" placeholder="Password" />
                            </div>


                            

                            <div className="mb-3">
                                <button className="btn btn-primary" onClick={submit}> Login</button>
                                </div>
                           
                       <NavLink exact to ="/signUp"> <p style ={{color:"#000"}}>Create a new Account </p></NavLink>

                        </div>


                    </div>
                </div>

            </div>

        </div>
    )
}

export default LogIn
