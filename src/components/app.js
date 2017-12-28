import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Navbutton from "./navbutton"
import Navigation from "./navigation"
// import About from "./about"
// import Start from "./start"
import Startimage from "./startimage"
import Category from "./category"
import ProjectPreview from "./project-preview"
import ProjectPage from "./project-page"

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>

        {/* <ProjectPreview /> */}
        {/* <Start /> */}
        {/* <Category /> */}
        {/* <ProjectPage /> */}

        <div className="App">

          <div>
            {/* <Startimage /> */}
            <Navbutton />

            {/* <Route path="/" exact component={Start} /> */}
            {/* <Route path="/" exact component={Startimage} /> */}
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
