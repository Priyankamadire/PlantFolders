import React,{useState} from 'react'
import { Outlet, Link,useNavigate } from "react-router-dom"

const NavPostTweets = () => {
  const navigate = useNavigate();



const [email,setEmail] = useState('');
const [password , setPassword] = useState('');
  
const loginUser = async (e) =>{
   e.preventtDefault();
   const res = await fetch('/suplogin',{
    method:"POST",
    headers:{
      "Content-Type" :"application/json" 

    },
    body:JSON.stringify({
      email,
      password

    })
     
   });

   const data = await res.json();
   if(res.status == 400 || !data){
    window.alert("Invalid details")
   }
   else{
    window.alert("login successfull");
      navigate('/resafterlogin');


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
    <h2>LOGIN/SIGNUP</h2>
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
   {/* <section className='login'>
            <div className='container mt-5'> */}

              {/* <div className='loin-content'>
                <h2 className='form-title'>Login</h2> */}
                 <div className="container mt-3">
  <div className="card" style={{ width: 400 }}>


  <img className="card-img-top" src="https://cdn2.iconfinder.com/data/icons/flat-style-svg-icons-part-1/512/user_login_man-1024.png" width="100%" />
  <div className="card-body">
    <h4 className="card-title">LOGIN</h4>
    <p className="card-text"></p>
                <form  method='POST' className ='login-forms' id='login-form'>
                  <br/>
                  <div className='form-group'>
                    <label htmlFor ="email">
                      {/* <i className='bi bi-email-fill'></i> */}
                      <h5>
                      <i className="fa fa-envelope-o" aria-hidden="true"></i>

                      </h5><p></p>
    
                    </label>
                    <input type="text" name = "email" id = "email" autoComplete='off'
                    //  value={user.email}
                    //  onChange={handleInputs}
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                                       placeholder='Your email'>
                    </input>
                  </div>

                

                  <div className='form-group'>
                    <label htmlFor ="password">
                      <h5>
                      <i className="fa fa-key" aria-hidden="true"></i>

                      </h5>
                      
                    </label>
                    <input type="password" name = "password" id = "password" autoComplete='off' 
                    
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                     placeholder='Enter password'>
                    </input>
                  </div>
                 
    
                  {/* <div className='form-group form-button'>
                    <input type = "submit" name = "signin" id="signin" className='form-submit' value="login" 
                    
                    onClick={loginUser}
                    ></input>
                  </div>
                  <br /><br/> */}


                  <center>
                  <button type="button submit" 
              name = "signup" id="signup" className='form-submit btn btn-success'
              onClick={loginUser} >
                
                <h6>
                  <em>login</em>
                </h6>

              </button></center>
           

<div>
  <h5>dost have a account click here</h5>
<button type="button" className='btn btn-secondary'><Link  className='text-white' to ='/ressignup'>SIGN UP</Link></button>

</div>
             
             

                 </form>
              </div>
              </div></div>
            {/* 
          </section> */}



      <br /><br/>
            <br/>
            <br/>
  
  <br />
  {/* </div> */}
</>


       <Outlet />
    </div>
  )
}

export default NavPostTweets
