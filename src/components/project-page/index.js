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
            <h4>{this.state.project.technical}</h4>
            <p>{this.state.project.longdescription}<span className="dot"> &#x263b;</span></p>
            {/* <a href="{this.state.project.link}" target="_blank" /></p> */}
          </div>
          <div className="projectlink">
            <a href={this.state.project.link} target="_blank" rel="noopener noreferrer"><h4>View project here <span className="arrowsize">&#x27F6;</span></h4></a>
            {/* <h4><a href="https://katudd.github.io/accordion/" target="_blank" rel="noopener noreferrer">View projectlink here</a></h4> */}
          </div>
          <div className="image">
            <img src={this.state.project.image2} alt=" " />
          </div>
          <div className="image">
            <img src={this.state.project.image} alt=" " />
          </div>

        </div>

      </div>

    )
  }

}
