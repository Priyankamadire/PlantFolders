
import React from 'react'
import { Link } from 'react-router-dom'

const Reslogin = () => {
  return (
    <div>
      <>
  <br /> <br />
  {/* <img src="loginjob.jpg" class="float-end" width="590"> */}
  {/* <div class="box" style="background-color: #86ffc495; "> */}
  <br />
  <center>
    <h2>LOGIN/SIGNUP FOR RESEARCHES</h2>
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
  <div className="card" style={{ width: 400 }}>
    <img
      className="card-img-top"
      src="https://cdn2.iconfinder.com/data/icons/flat-style-svg-icons-part-1/512/user_login_man-1024.png"
      alt="Card image"
      style={{ width: "100%" }}
    />
    <div className="card-body">
      <h4 className="card-title">LOGIN</h4>
      <p className="card-text">
        ENTER YOUR EMail
        <input type="email" placeholder="enter ur number" />
      </p>
      <p className="card-text">
        ENTER YOUR PASSWORD:
        <input type="password" placeholder="enter ur password" />
      </p>
      <Link to="/resafterlogin" className="btn btn-primary">
        LOGIN
      </Link>
      <div className="sidebyside">
        <p className="card-text">Dont have account</p>
        <Link to="/ressignup" className="btn btn-primary">
          SIGNUP
        </Link>
      </div>
    </div>
  </div>
  <br />
  {/* </div> */}
</>

    </div>
  )
}

export default Reslogin
