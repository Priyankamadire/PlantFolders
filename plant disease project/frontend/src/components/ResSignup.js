import React,{useState} from 'react'
import { Outlet, Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';

const ResSignup = () => {
  const navigate = useNavigate();
        
  const [admin,setUser]=useState({
    resname: "",
    email:"", 
    phone:"",
    password:"",
    cpassword:""
  });
  let name,value;
  const handleInputs=(e) =>{
 console.log(e);
  name = e.target.name;
  value = e.target.value;
  setUser({...admin,[name]:value});
  
  }
   const PostData = async (e) => {
    e.preventDefault();
    const {resname, email,  phone, password,  cpassword}=admin;
    const res = await fetch("/supregister" , {
      method:"POST",
      headers:{
        "Content-Type" :"application/json"

      },
        body:JSON.stringify({
          resname, email,  phone, password,  cpassword
        })
    });
    const data = await res.json();
    if(!resname  ||!email || !phone|| !password || !cpassword){
      window.alert("Please fill all the details");
      console.log("invalid registeration");
    }
    else if (res.status === 423){
      window.alert("THIS USER ALREDY EXIST");
    }
    else if (res.status === 425){
      window.alert("PASSWORD DINT MATCH TRY AGAIN");
    }
    else{
      window.alert("registeration successful");
      console.log(" registeration successful");
      // navigate.push('/login');
      // history.push('/login');
    //   navigate('/sup_log');
      navigate('/reslogin');
    }


   }
  return (
    <div>
        <>
  <br />
  {/* <center><h1>LOGIN OR SIGNUP FOR PEOPLE WHO ARE LOOKING FOR A JOB</h1></center> */}
  <br /> <br />
  {/* <img src="loginjob.jpg" class="float-end" width="590"> */}
  {/* <div class="box" style="background-color: #86ffc495; "> */}
  <br />
  <center>
    <h2>SIGNUP</h2>
  </center>
  {/* <p>ENTER YOUR MOBILE NUMBER:<input type="number" placeholder="enter ur number"></p>
 <p>
     ENTER YOUR PASSWORD:<input type="password" placeholder="enter ur password"> </p>
     <div class="container">
   <center>
   <button type="button" class="btn btn-secondary"> <a class=" text-light " href="lonav.html"><h4><em>SUBMIT</em></h4></a></button>
   <br><br>
   <button type="button" class="btn btn-warning"> <a class=" text-light " href="SIGNUP.html"><h4><em>DONT HAVE ACCOUNT CLICK HERE TO CREATE</em></h4></a></button>
   <br><br>
   </center> */}
  <pre />
   {/* <section className='registerusp'>
                <div className='container mt-5'> */}
                 <div className='container mt-5'> 
  <div className="card" style={{ width: 400 }}>
  <img
className="card-img-top"
src="https://tse4.mm.bing.net/th?id=OIP.rbu4Dm0UwNii6sYCNVOoSAHaE8&pid=Api&P=0&h=180" 
alt="Card image"
style={{ width: "100%" }}
/>
<div className="card-body">
    <h4 className="card-title">SIGN UP</h4>
    <p className="card-text"></p>
                  {/* <div className='signup-contents'> */}
                    {/* <center>
                    <h2 className='form-title'>Sign up/Register for super-admin</h2>

                    </center> */}
                    <form method='POST' className ='register-forms' id='register-forms'>
                      <br/>
                  
                      <div className='form-groups'>
                        <br/>
                        <label htmlFor ="resname">
                          <h5>Enter ur name:
                  {/* <i className="fa fa-briefcase" aria-hidden="true" /> */}
                  <i class="fa fa-building" aria-hidden="true"></i>

                </h5><p></p>
                        </label>
                        <input type="text" name = "resname" id = "resname" autoComplete='off'
                        value={admin.resname}
                        onChange={handleInputs}
              
                        placeholder='Name'>
                        </input>
                      </div>
                      <div className='form-groups'>
                        <label htmlFor ="email">
                          {/* <i className='bi bi-email-fill'></i> */}
                          <h5>Enter  email:
                  <i className="fa fa-envelope-o" aria-hidden="true"></i>


                </h5><p></p>
                        </label>
                        <input type="text" name = "email" id = "email" autoComplete='off'
                         value={admin.email}
                         onChange={handleInputs}
        
                                           placeholder='inst email'>
                        </input>
                      </div><div className='form-groups'>
                        <label htmlFor ="phone">
                          {/* <i className='bi bi-person-fill'></i> */}
                          <h5>Enter phone number:
                          <i className ="fa fa-phone-square" aria-hidden="true"></i>



                </h5><p></p>
                        </label>
                        <input type="text" name = "phone" id = "phone" autoComplete='off'
                         value={admin.phone}
                         onChange={handleInputs}
                          placeholder='inst  Phone num'>
                        </input>
                      </div>
                      <div className='form-groups'>
                        <label htmlFor ="password">
                          {/* <i className='bi bi-person-fill'></i> */}
                          {/* <i className="fa fa-key" aria-hidden="true"></i> */}
                          <h5>Create password
                  {/* <i className="fa fa-briefcase" aria-hidden="true" /> */}
                  <i className="fa fa-key" aria-hidden="true"></i>

                </h5><p></p>
                          
                        </label>
                        <input type="password" name = "password" id = "password" autoComplete='off' 
                         value={admin.password}
                         onChange={handleInputs}
                         placeholder='Enter password'>
                        </input>
                      </div><div className='form-groups'>
                        <label htmlFor ="cpassword">
                          {/* <i className='bi bi-person-fill'></i> */}
                          {/* <i className="fa fa-key" aria-hidden="true"></i>
                           */}
                            <h5>Confirm password
                  {/* <i className="fa fa-briefcase" aria-hidden="true" /> */}
                  <i className="fa fa-key" aria-hidden="true"></i>

                </h5><p></p>
                          
                          </label>
                        <input type="password" name = "cpassword" id = "cpassword" autoComplete='off' 
                         value={admin.cpassword}
                         onChange={handleInputs}
                         placeholder='Confirm password'>
                        </input>
                      </div>
                      <br />

                      {/* <div className='form-group form-button'>
                        <input type = "submit" name = "signupform" id="signupform" className='forms-submit' value="register" onClick={PostData}></input>
                      </div> */}
                      <center>
              <button type="button submit" 
              name = "signup" id="signup" className='form-submit btn btn-success'
              onClick={PostData} >
                <h4>
                  <em>REGISTER</em>
                </h4>

              </button></center>
              <br/>
              <h4>ALREDY HAVE AN ACCOUNT
              <button type="button" 
              className=' btn btn-info'
              > <Link to='/reslogin'>

<h5>
                  <em className='text-dark'>LOGIN</em>
                </h5>
              </Link>
               
               
              </button>
              </h4>
<br/>
                    </form>
                  </div>
                  </div>            
                {/*
              </section> */}
  </div>
</>


        <Outlet />
    </div>
  )
}

export default ResSignup
