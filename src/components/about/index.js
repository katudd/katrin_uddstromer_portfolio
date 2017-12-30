import React from "react"
// import { Link } from "react-router-dom"
import "./style.css"

export default class About extends React.Component {

  render() {
    return (
      <div className="About">
        <div className="about-content">
          Hej! My name is Katrin, and I am a graphic designer living in Stockholm. Contact me at:
        </div>
          {/* {"\n"} */}
        <a className="mail" href="mailto:katrin@uddstromer.se">katrin@uddstromer.se</a>


        <div className="social-icons">
          <a href="#" class="fa fa-linkedin" />
          <a href="#" class="fa fa-github" />
        </div>
      </div>

    )
  }

}
