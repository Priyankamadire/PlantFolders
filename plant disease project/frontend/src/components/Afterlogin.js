import React,{useState} from 'react'
import { Outlet, Link } from "react-router-dom"
const Afterlogin = () => {
  return (
    <div>


<>
  <br />
  <div className="offcanvas offcanvas-start" id="demo">
    <div className="offcanvas-header">
      {/* <h1 class="offcanvas-title">Heading</h1> */}
      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" />
    </div>
    <div className="offcanvas-body">
      {/* <p>Some text lorem ipsum.</p>
<p>Some text lorem ipsum.</p>
<p>Some text lorem ipsum.</p> */}
      <Link to="/predictdisease">
        <h4>PREDICT DISEASE</h4>
      </Link>
      <hr />
      {/* <Link to="/planthealth">
        {" "}
        <h4>CHECK PLANT HEALTH</h4>
      </Link>
      <hr /> */}
      <Link to="/viewtweet">
        <h4>VIEW TWEETS FROM RESEARCHERS</h4>
      </Link>
      <hr />
      {/* <button class="btn btn-secondary" type="button">A Button</button> */}
    </div>
  </div>
  <div className="container-fluid mt-3">
    <button
      className="btn btn-success bi bi-funnel-fill"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#demo"
    >
      FILTERS
    </button>
  </div>
  <h2>
    <center>
    WELCOME TO OUR WEBSITE...
    </center>

   
    
  </h2>
  <center>
  <img
  className='imagedoc'

        src="https://www.agri.com.au/wp-content/uploads/2015/05/farm.jpg"
        />
  </center>
  <br></br>
  
 
  <br></br>
  <h3>
    <p>This is General login...Where you can predict
       your plant disease and</p><p> get proper treatment for your plant and get Tweets from top RESEARCHERS and keep your plant more healthy</p>
  </h3>
</>

       <Outlet />
    </div>
  )
}

export default Afterlogin
