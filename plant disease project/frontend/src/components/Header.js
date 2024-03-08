import React from 'react'
import logo from '../images/logo.png'
import { Link,Outlet} from 'react-router-dom'
const Header = () => {
  return (
    <div>
      <div className="design">
  <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">
      <img className='logoimage' src={logo}  />
      </Link>
      <button
        type="button"
        className="navbar-toggler btn btn-light"
        data-bs-toggle="collapse"
        data-bs-target="#menubar"
      >
        <span className="navbar-toggler-icon btn btn-light" />
      </button>
      <div className="collapse navbar-collapse text-light" id="menubar">
        <ul className="navbar-nav col">
          <li className="nav-item col">
            <Link className="nav-link bi bi-house-fill text-light" to="/">
              HOME
            </Link>
          </li>
          <li className="nav-item col">
            <Link
              className="nav-link bi bi-ticket-fill text-light"
              to="/about"
            >
              ABOUT{" "}
            </Link>
          </li>
          <li className="nav-item col">
            <Link
              className="nav-link bi bi-newspaper text-light"
              to="/plantdetails"
            >
              PLANT DETAILS
            </Link>
          </li>
          <li className="nav-item col">
            <Link
              className="nav-link bi bi-box-arrow-in-right text-light"
             to="/genlogin"
            >
              LOGIN
            </Link>
          </li>
          <li className="nav-item col">
            <Link
              className="nav-link bi bi-file-earmark-post text-light"
             to='/reslogin'
            >
              POST TWEETS{" "}
            </Link>
          </li>
          <li className="nav-item col">
            <Link
              className="nav-link bi bi-person-lines-fill text-light"
             to='/contact'
            >
              CONTACT_US{" "}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
 
</div>

<Outlet />
    </div>
  )
}

export default Header
