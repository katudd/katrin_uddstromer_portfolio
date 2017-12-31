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

        <h1 className="title">{this.state.project.name}</h1>

        <div className="project-wrapper">

          <div>
            <p>{this.state.project.longdescription}<span className="dot"> &#x263b;</span></p>
          </div>

          <div className="image">
            <img src={this.state.project.image} alt="screenshot cssgrid" />
          </div>

        </div>

      </div>

    )
  }

}
