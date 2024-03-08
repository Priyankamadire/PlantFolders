import React,{useEffect,useState} from 'react'
import { Outlet, Link,useNavigate } from "react-router-dom"
import axios from 'axios';

const ViewTweets = () => {
  const navigate = useNavigate();
  const [products , setProducts] = useState("");


  useEffect(()=>{
    const fetchdata=async()=>{
      const data = await axios.get('/myrestweets');
      console.log(data);
      setProducts(data);
    };
    fetchdata();
  },[]);
  return (
    <div>

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
      {/* <hr />
      <Link to="/planthealth">
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
  {/* <navbar>
    <form className="d-flex">
      <input
        className="form-control me-2"
        type="text"
        placeholder="ENTER POST YOU ARE INTRESTED IN "
      />
      <button className="btn btn-primary  bi bi-search " type="button">
        Search
      </button>
    </form>
  </navbar> */}
  <br />
  
  {/* <div className="box" style={{ backgroundColor: "rgb(255, 245, 159)" }}>
    <strong>Researcher Name:</strong>
    <p>XYZ</p>
    <br />
    <strong>PLANT DISEASE:</strong>
    <p>Downy mildew</p>
    <br />
    <strong>TWEET:</strong>
    <p>
      They attack vegetables, fruits, and flowers. By the time a plant shows
      symptoms, it is too late. Prevention is key.
    </p>
  </div> */}
  <center><h1><em>TWEETS FROM TOP RESEARCHERS</em></h1></center>
  <br />
  <div className='table-responsive'>
      <table style={{ width: "100%" }} method="GET" className="text-dark" >
    <tbody >
      <tr>
        {/* <th>S.NO</th> */}
         <th>RESEARCHER_NAME</th>
      <th>QUALIFICATION</th>
      <th>EXPERIENCE</th>
      <th>DISEASE</th>
      <th>EXPLANATION</th>
      </tr>

      {
        products && products?.data.map((product)=>(

         
      <tr>
        
     <td>{product.resname}</td>
      <td>{product.qualification}</td>
      <td>{product.experience}</td>
       <td>{product.disease}</td> 
       <td>{product.explanation}</td>
        {/* <td><Link to ='/apply'>APPLY</Link></td>  */}
    </tr>
     

        ))
      } </tbody></table></div>
  <br />
  
  <br />

</>

       <Outlet />
    </div>
  )
}

export default ViewTweets
