import React,{useState} from 'react'
import { Outlet, Link,useNavigate } from "react-router-dom"
const PostTweets = () => {
  const navigate = useNavigate();
  const [admin,setUser]=useState({
    resname:"",
    qualification:"",
    experience:"",
    disease:"",
    explanation:""
    
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
  const {resname,qualification,experience,disease,explanation}=admin;
  const res = await fetch("posttweet__" , {
    method:"POST",
    headers:{
      "Content-Type" :"application/json"

    },
      body:JSON.stringify({
        resname,qualification,experience,disease,explanation
      })
  });
  const data = await res.json();
  if(!resname||!qualification||!experience||!disease||!explanation){
      window.alert("please fill all the details");
  }
 
    else{
      window.alert("TWEET POSTED SUCCESSFULLY");
      console.log(" POSTED SUCCESSFULLY");
      navigate('/mytweets');
    }

}
  

  return (
    <div>
      <br/>
      <div className="offcanvas offcanvas-start" id="demo">
    <div className="offcanvas-header">
      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" />
    </div>
    <div className="offcanvas-body">
      <strong>
        <pre />
        <p> </p>
        <pre />
        <p />
      </strong>
      <ul>
        <strong></strong>
        <li>
          <strong></strong>
          <div className="container">
            <strong></strong>
            <div className="dropdown">
              <strong></strong>
              <button
                type="button"
                className="btn btn-default dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <strong>
                  <Link className="text-dark " to="/">
                    TWEETS
                  </Link>{" "}
                </strong>
              </button>
              <ul className="dropdown-menu">
                <li>
                  {" "}
                  <Link className="dropdown-item text-dark" to="/posttweet">
                    POST TWEET
                  </Link>
                </li>
                <hr />
                <li>
                  {" "}
                  <Link
                    className="dropdown-item text-dark"
                   to="/mytweets"
                  >
                    VIEW MY TWEETS
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <hr />
        <li>
          <Link className=" text-dark" to="/updateplatedetail">
            <strong>UPDATE PLANT DISEASE DETAILS</strong>
          </Link>
        </li>
        <hr />
      </ul>
    </div>
  </div>
  <div className="container-fluid mt-3">
    <button
      className="btn btn-success bi bi-funnel"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#demo"
    >
      FILTERS
    </button>
  </div>
  <br />
     <div className="box" style={{ backgroundColor: "rgb(178, 255, 184)" }}>
    <img className="float-end rounded-circle" src="https://freedesignfile.com/upload/2017/10/Scientists-cultivate-plants-in-the-laboratory-Stock-Photo-06.jpg" width="300px" />
    <form method='POST'> 
      <center>
        <em>
          <u>
            <h1>POST A TWEET</h1>
          </u>
        </em>
      </center>
      <p>
        NAME:{" "}
        <input type="text" name="resname" id = "resname"    value={admin.resname}
           onChange={handleInputs} placeholder="name" />
      </p>

    
      <p>
        QUALIFICATION:{" "}
        <input type="text" name="qualification"
        id = "qualification"    value={admin.qualification}
        onChange={handleInputs}
         placeholder="eg:Mtech" />
      </p>
      <p>
        EXPERIENCE:{" "}
        <input type="text" name = "experience" id = "experience"  
          value={admin.experience}
           onChange={handleInputs} placeholder="eg:5 yrs" />
      </p>
      <p>
        DISEASE:{" "}
        <input type="text" name="disease" id = "disease"  
          value={admin.disease}
           onChange={handleInputs}
           placeholder="disease name" />
      </p>
      <p>
       Explanation:{" "}
        <input type="text"
         name="explanation"
         id = "explanation"    value={admin.explanation}
           onChange={handleInputs}  />
      </p>
      <center>
        <button type="button submit"  
        name = "signup" id="signup"
        className="btn btn-secondary form-submit"
        onClick={PostData} 
        >
        
            <h4>
              <em>POST</em>
            </h4>
        
        </button>
      </center>
      <br />
      <br />
    </form>
  </div>









        <Outlet />
    </div>
  )
}

export default PostTweets
