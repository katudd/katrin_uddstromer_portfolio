import React from "react"
// import projects from "data/projects"
// import ProjectPreview from "./project-preview"
import "./style.css"

export default class Category extends React.Component {

  render() {
    return (

      <div className="Category">
        <h1>Categoryname</h1>
        <div className="projects">
          shdfklsdhfklsadjfh
        </div>
      </div>

    )
  }

}

{/* <div className="Category">
  <h1>Categoryname</h1>
  <div className="projects">
    {projects.map(project => (
      <ProjectPreview
        key={project.id}
        url={project.id}
        name={project.name}
        description={project.description}
        category={project.category} />
    ))}
  </div>
</div> */}
