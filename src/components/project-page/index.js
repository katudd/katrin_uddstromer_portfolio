import React from "react"
import projects from "data/projects"
import "./style.css"

export default class ProjectPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      project: {}
    }
  }

  componentDidMount() {
    const project = projects.find(p => (p.id === this.props.match.params.id))
    this.setProject(project)
  }

  setProject = (project) => {
    this.setState({
      project
    })
  }

  render() {
    return (
      <div className="ProjectPage">
        <h1>{this.state.project.name}</h1>

        <div>
          <img src={this.state.project.image} alt="screenshot cssgrid" className="project-image" />
        </div>

        <div>
          <p>{this.state.project.description}</p>
        </div>

      </div>

    )
  }

}
