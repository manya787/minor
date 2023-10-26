import React, {useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import logo from "../../images/logo.jpg";
import "../../App.css";
import {UserContext} from "./post";


const Navbar = () => {
  const {state} = useContext(UserContext); 
  const RenderMenu = () => {
    if(state){
      return (
        <>
<li className="nav-item">
          <NavLink className="nav-link" to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/messages">Messages</NavLink>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" to="/posts" role="button" data-bs-toggle="dropdown" aria-expanded="false">Post</a>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" to="/mypost">My Posts</NavLink></li>
            <li><NavLink className="dropdown-item" to="/createpost">Create Post</NavLink></li>
            <li><a className="dropdown-divider"></a></li>
          </ul>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/logout">Logout</NavLink>
        </li>
        </>
      )
  } else {
    return (
      <>
<li className="nav-item">
          <NavLink className="nav-link" to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/messages">Messages</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/signup">Signup</NavLink>
        </li>
      </>
    )
  }
}

  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src={logo} className='logo' alt="logo" ></img></a>
      <div className="d-flex flex-column p-0 pt-0 pb-0">
          <h5 className="mb-0"><span className="ntitle">CoLabConnect</span></h5>
          <p className="mb-0"><span className="nsubtitle">Communicate. Collaborate. Create</span></p>
        </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

        <RenderMenu/>

      </ul>
    </div>
  </div>
</nav> 
    </>
  )
}

export default Navbar;