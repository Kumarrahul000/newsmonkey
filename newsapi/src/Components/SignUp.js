import React, {useState}from 'react';

import {   useHistory } from 'react-router-dom';


const SignUp= () => {
    const [user,setUser]=useState({
        name:"",
        email:"",
        password:"",
        mobile:"",
        
    });


  
    
    const {name,email,password,mobile,}=user;
    const onInputChange=e=>{
        setUser({...user,[e.target.name]:e.target.value} );
    };

const history =useHistory()

async function  submit(){
   
  
   
       
    console.warn()
      let result=   await fetch('https://ttmg-backend.herokuapp.com/api/auth/staffRegister',{
  
     method:'post',
     body:JSON.stringify(user),
     headers: {
  
              'Content-Type': 'application/json',
              'Accept': 'application/json'
      
            }
          
  
      })
  result= await result.json()
  .then((result) => {
    if ( result === !result){
        alert("invalid")
    }else{
        alert("success")
    }
    history.push("/login")
console.warn("result",result)
 localStorage.getItem("user-info",JSON.stringify(result));


    
          })

      }
 
    return (
        <div className="container my-5">
           
            <div className="row">
                

                    <div className="row">
                        <div className="col-md-6  mx-auto">
                            <h2>Sign Up  </h2>
                           
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Name</label>
                                <input type="text" required ="required"  name="name" value={name} onChange={e=>onInputChange(e)} className="form-control" id="exampleFormControlInput1" placeholder="Name"   />
                        
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" required ="required" name="email" value={email} onChange={e=>onInputChange(e)}  className="form-control" id="exampleFormControlInput1" placeholder="Email" />
                              
                            </div>

                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Password</label>
                                <input type="password" required ="required"  name="password" value={password} onChange={e=>onInputChange(e)}  className="form-control" id="exampleFormControlInput1" placeholder="Password" />
                            </div>

                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Number</label>
                                <input type="text" required ="required" name="mobile" value={mobile}  onChange={e=>onInputChange(e)}  className="form-control" id="exampleFormControlInput1" placeholder="mobile"  />
                            </div>

                        

                            <div className="mb-3">
                                <button className="btn btn-primary" onClick={submit}> Register</button>
                               
                                </div>
                               
                               

                        </div>
                    
                   
             

                    </div>
                </div>

            </div>

       
    )
}

export default SignUp
