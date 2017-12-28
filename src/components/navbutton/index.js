import React from "react"
import { Link } from "react-router-dom"
import "./style.css"

export default class Navbutton extends React.Component {

  render() {
    return (
      <div className="Navbutton">
        <div className="button-right">
          <Link to="/navigation">navbutton</Link>
        </div>
      </div>
    )
  }

}
