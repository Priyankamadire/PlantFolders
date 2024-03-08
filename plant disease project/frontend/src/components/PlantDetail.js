import React,{useEffect,useState} from 'react'
import { Outlet, Link,useNavigate } from "react-router-dom"
import axios from 'axios';
const Plantdisease = () => {
  const navigate = useNavigate();
  const [products , setProducts] = useState("");

 
useEffect(()=>{
const fetchdata=async()=>{
  const data = await axios.get('/pdet');
  console.log(data);
  setProducts(data);
};
fetchdata();
},[]);
  return (
    <div>

<>
  <br />
  <center>
    <em>
    <h2>PLANT DISEASE DETAILS</h2>

    </em>
  </center>
  <br />
  <div className='table-responsive'>
      <table style={{ width: "100%" }} method="GET" className="text-dark" >
    <tbody >
      <tr>
        {/* <th>S.NO</th> */}
        <th>S.NO</th>
        <th>DISEASE NAME</th>
        <th>OCCURS IN</th>
        <th>CAUSE</th>
        <th>RECOVERY</th>
      </tr>

      {
        products && products?.data.map((product)=>(

         
      <tr>
        
        <td>{product.snum}</td>
      <td>{product.name}</td>
      <td>{product.diseaseoccur}</td>

      <td>{product.cause}</td>
      <td>{product.recovery}</td>
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

export default Plantdisease
