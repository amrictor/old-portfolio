import React, { Component } from "react";
import "./App.scss";

import { GoMarkGithub as Github } from 'react-icons/go'
import { FaLinkedin as LinkedIn } from 'react-icons/fa'
import { IoMdMail as Mail } from 'react-icons/io'
 

import Home from './Components/Home.jsx'
import Experience from './Components/Experience.jsx'
import Projects from './Components/Projects.jsx'


import { Switch, Route, withRouter, Link } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import "./pageTransitions/slideTransition.scss";

class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    prevPage: this.getPage(this.props.location)
  };
}

componentWillReceiveProps() {
  this.setState({ prevPage: this.getPage(this.props.location) });
}

getPage(location) {
  let pages= {
    "experience": 2,
    "projects": 3
  }
  let pathArr = location.pathname.split("/");
  pathArr = pathArr.filter(n => n !== "");
  let pageNumber = pages[pathArr[pathArr.length-1]]
  return pageNumber===undefined ? 0 : pageNumber;
}

navBar(){

  return(
    <div className="header">
      <div className="links">
        <div className="pages">
            <Link to={"/"} className={this.props.location.pathname==="/" ? "active" : ""}>ABIGAIL RICTOR</Link>
            <Link to={"/experience"} className={this.props.location.pathname==="/experience" ? "active" : ""}>EXPERIENCE</Link>
            <Link to={"/projects"} className={this.props.location.pathname==="/projects" ? "active" : ""}>PROJECTS</Link>
        </div>
        <div className="spacer"/>
        <div className="external">
          <a target="_blank" rel="noopener noreferrer" href="http://github.com/amrictor"><Github/></a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/amrictor/"><LinkedIn /></a>
          <a target="_blank" rel="noopener noreferrer"  href="mailto:amrictor@gmail.com"><Mail/></a>
        </div>
      </div>
    </div>
  )
}
  render() {
    const location = this.props.location;
    const currentKey = location.pathname.split("/")[location.pathname.split("/").length-1] || "/";
    const timeout = { enter: 400, exit: 400 };
    return (
      <TransitionGroup component="div" className="App">
        {this.navBar()}
            <CSSTransition
              key={currentKey}
              timeout={timeout}
              classNames="pageSlider"
              mountOnEnter={false}
              unmountOnExit={true}
            >
              <div
                className={
                  this.getPage(location) > this.state.prevPage 
                    ? "left"
                    : "right"
                }
              >
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/experience" component={Experience} />
                  <Route path="/projects" component={Projects} />
                </Switch>
              </div>
              
            </CSSTransition>
            
      </TransitionGroup>
    );
  }
}

export default withRouter(App);
