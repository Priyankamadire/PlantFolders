import React from 'react'
import { Outlet, Link , useNavigate } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <br/>
      <center><em><h1>CONTACT DETAILS</h1></em></center>
      <div className="box" style={{ backgroundColor: "rgb(452, 205, 196)" }}>
  <strong>
   <div >
   <h3><em>CREATER OF THE PAGE</em></h3>
   </div>
  </strong>
  <p >MADIRE PRIYANKA</p>
 
</div>
<div className="box" style={{ backgroundColor: "rgb(222, 255, 196)" }}>
  <strong>
   <div >
   <h3><em>CONTACT NUMBER</em></h3>
   </div>
  </strong>
  <p >9392475862</p>
 
</div> <div className="box" style={{ backgroundColor: "rgb(155, 215, 196)" }}>
  <strong>
   <div >
   <h3><em>EMAIL</em></h3>
   </div>
  </strong>
  <p ><a href='#'>madirepriyanka01@gmail.com</a></p>
 
</div> <div className="box" style={{ backgroundColor: "rgb(222, 155, 206)" }}>
  <strong>
   <div >
   <h3><em>RSEUME</em></h3>
   </div>
  </strong>
  <p ><a href="https://priyankamadire.github.io/resume-with-html-css/">VIEW</a></p>
 
</div>

<div className="box" style={{ backgroundColor: "rgb(422, 255, 196)" }}>
  <strong>
   <div >
   <h3><em>GITHUB_LINK</em></h3>
   </div>
  </strong>
  <p ><a href="https://github.com/Priyankamadire">VIEW</a></p>
 
</div>

     
      {/* <table style={{ width: "100%" }} >
        <tbody>
        <tr>
          <th></th>
          <th>CONTACT NUMBER</th>
          <th>EMAIL</th>
          <th>RSEUME</th>
          <th>GITHUB</th>
        </tr>
        <td>MADIRE PRIYANKA</td>
        <td>9392475862</td>
        <td><a href='#'>madirepriyanka01@gmail.com</a></td>
        <td><a href="https://priyankamadire.github.io/resume-with-html-css/">RSEUME</a></td>
        <td><a href ='https://github.com/Priyankamadire'>GIT</a></td>

        </tbody>
       
       
      </table> */}
    </div>
  )
}

export default Contact