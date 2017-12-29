import React from "react"
import projects from "data/projects"
import ProjectPreview from "../projectpreview/index.js"
import "./style.css"

export default class Category extends React.Component {

  render() {
    return (

      <div className="Category">

        <h1 className="title">
          Category
        </h1>

        <div className="flex-wrapper">
          <div className="projects">
            {projects.map(project => (
              <ProjectPreview
                key={project.id}
                url={project.id}
                name={project.name}
                description={project.description}
                image={project.image} />
            ))}
          </div>
        </div>

      </div>
    )
  }

}
