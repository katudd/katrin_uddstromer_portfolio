import React from "react"
import { Link } from "react-router-dom"
import "./style.css"

export default class Navigation extends React.Component {

  render() {
    return (
      <nav className="Navigation">

        {/* <ul>
          <li><Link to="/" >Category</Link></li>
          <li><Link to="/" className="Links">Social Media Content</Link></li>
          <li><Link to="/" className="Links">Design</Link></li>
          <li><Link to="/" className="Links">Illustration</Link></li>
          <li><Link to="/about" className="Links">About</Link></li>
        </ul> */}

        <ul>
          {/* <li><a href="#" id="menuitem1">Category</a></li> */}
          <li><Link to="/Category" className="menu-links">Code</Link></li>
          <li><Link to="/Category" className="menu-links">Design</Link></li>
          <li><Link to="/Category" className="menu-links">Social Media Content</Link></li>
          <li><Link to="/Category" className="menu-links">Illustration</Link></li>
          {/* <li><a href="#">About</a></li> */}
        </ul>

      </nav>

    )
  }

}
