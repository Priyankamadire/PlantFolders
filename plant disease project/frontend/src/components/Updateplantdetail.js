import React,{useEffect ,  useState} from 'react';
import { Outlet, Link ,useNavigate  } from "react-router-dom";
import axios from 'axios';

const Updateplantdetail = () => {
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
  // const navigate = useNavigate();
  const [admin,setUser]=useState({
    snum: "",
   name: "",
   diseaseoccur:"",
    qualification:"",
    department:"",
    cause:"",
    recovery:""


    
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
    const {snum,name,diseaseoccur,cause,recovery }=admin;
    const res = await fetch("/plantdetail" , {
      method:"POST",
      headers:{
        "Content-Type" :"application/json"
  
      },
        body:JSON.stringify({
          snum,name,diseaseoccur,cause,recovery 
        })
    });
    const data = await res.json();
    if(!snum||!name||!diseaseoccur||!cause||!recovery){
        window.alert("please fill all th details");
    }
   else if(res.status === 423 || !data){
        window.alert("Disease already uploded  try again");
        // console.log("invalid registeration");
      }
      else{
        window.alert("details uploaded successfully");
        console.log(" registeration successful");
        // navigate('/');
      }
  
  }
  return (
    <div>
      <>
  <br />
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
  <br />
  <div className="table-responsive">    
 <table style={{ width: "100%" }} className="text-dark" method='POST'>
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

        
    </tr>
     

        ))
      }
   
      <tr>
     
     <td>
       <input type="number"   name = "snum" id = "snum"    value={admin.snum}
           onChange={handleInputs}  />
     </td>
     <td>
       <input type="string" name = "name" id = "name"  value={admin.name}     
               onChange={handleInputs} />
     </td>
     <td>
       <input type="string" name = "diseaseoccur" id = "diseaseoccur"  value={admin.diseaseoccur}     
               onChange={handleInputs} />
     </td>
     
     <td>
       <input type="string"   name = "cause" id = "cause" value={admin.cause}     
               onChange={handleInputs} />
     </td>
     
     <td>
       <input type="string" name = "recovery" id = "recovery" value={admin.recovery}     
               onChange={handleInputs} />
     </td>
    
   
   </tr>
   
    </tbody>
   
  </table> </div>
  <br/>
  <button type="button submit" name = "signup" id="signup" className=' btn btn-secondary table-submit' onClick={PostData} >POST
  </button></>

        <Outlet />
    </div>
  )
}

export default Updateplantdetail
