import React from "react"
import { Link } from "react-router-dom"
import "./style.css"

export default class ProjectPreview extends React.Component {

  render() {
    return (
      <Link to={`/projects/${this.props.url}`} className="ProjectPreview">
        <div className="inner">
          <h1>sdjfölsdjfösdjfö</h1>
          <div className="description">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              hasellus ex nibh, ullamcorper et tincidunt vel,venenatis at tortor.
              In condimentum tempus suscipit. Integer ultrices eget ex eget eleifend.
              Proin semper rhoncus augue, nec interdum mi placerat nec.
            </p>
          </div>
        </div>
      </Link>

    )
  }

}
