import React from 'react'
import { Link } from 'react-router-dom'

const PredictDisease = () => {
  return (
    <div>
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
      </Link> */}
      <hr />
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
  <>
  <br />
  <br />
  <div className="card" style={{ width: 400 }}>
    <div className="card-body">
      <img
        className="card-img-top"
        src="https://extension.umn.edu/sites/extension.umn.edu/files/linden-leaf-blotch-grabowski.jpg"
        alt="Card image"
        style={{ width: "100%" }}
      />
      <p className="card-text">
        UPLOAD IMAGE OF EFFECTED LEAF
        {/* <form action="/action_page.php"> */}
      </p>
      <form>
        <input type="file" id="myFile" name="filename" />
      </form>
      <p />
      
    </div>
  </div>
  <div className="sidetoside">
        <Link to="/" className="btn btn-info">
          <h2> PREDICT</h2>
        
        </Link>
      </div>

</>

    </div>
  )
}

export default PredictDisease
