import React from 'react'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
  render() {
    return(
      <div className="nav-bar">
        <Link to="/"><img className="nav-bar-logo" src="/newsy_logo.png" /></Link>
        <Link to="/"><span className="nav-bar-title">Newsy </span> </Link>
        <Link to="/authors"><span className="nav-bar-link">Author Index </span></Link>
        <Link to="/login"><span className="nav-bar-link">Login </span></Link>
        <Link to="/signup"><span className="nav-bar-link">Signup </span></Link>
      </div>
    )
  }
}

export default NavBar;