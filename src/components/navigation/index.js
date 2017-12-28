import React from "react"
import { Link } from "react-router-dom"
import "./style.css"

export default class Navigation extends React.Component {

  render() {
    return (
      <nav className="Navigation">

        <ul>
          {/* <li><a href="#" id="menuitem1">Category</a></li> */}
          <li><Link to="/Category" className="menu-links">Code</Link></li>
          <li><Link to="/Category" className="menu-links">Design</Link></li>
          <li><Link to="/Category" className="menu-links">Social Media</Link></li>
          <li><Link to="/Category" className="menu-links">Illustration</Link></li>
          {/* <li><Link to="/Category" className="menu-links">About</Link></li> */}

          {/* <li><a href="#">About</a></li> */}
        </ul>

      </nav>

    )
  }

}
