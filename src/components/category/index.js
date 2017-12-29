import React from "react"
import projects from "data/projects"
import ProjectPreview from "../projectpreview/index.js"

export default class Category extends React.Component {

  render() {
    return (
      <div className="Category">
        <h1>Category</h1>

        <div className="projects">
          {projects.map(project => (
            <ProjectPreview
              key={project.id}
              url={project.id}
              name={project.name}
              description={project.description} />
          ))}
        </div>
      </div>
    )
  }

}
