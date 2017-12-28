import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Navbutton from "./navbutton"
import Navigation from "./navigation"
// import About from "./about"
import Start from "./start"
import Category from "./category"
import ProjectPreview from "./project-preview"
import ProjectPage from "./project-page"

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>

        {/* <ProjectPreview /> */}

        {/* <ProjectPage /> */}

        <div className="App">
          {/* <Start /> */}
          <Navbutton />
          {/* <Category /> */}

          <div className="page">
            <Route path="/" exact component={Start} />
            <Route path="/navigation" component={Navigation} />
            <Route path="/category" component={Category} />
            <Route path="/projectpreview" component={ProjectPreview} />
            <Route path="/project" component={ProjectPage} />
          </div>
        </div>
      </BrowserRouter>
    )
  }

}

export default App
