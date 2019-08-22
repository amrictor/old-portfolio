import React, { Component } from "react";
import "./App.scss";

import { GoMarkGithub as Github } from 'react-icons/go'
import { FaLinkedin as LinkedIn } from 'react-icons/fa'
import { IoMdMail as Mail } from 'react-icons/io'
 

import Home from './Components/Home.jsx'
import Experience from './Components/Experience.jsx'
import Projects from './Components/Projects.jsx'
import Game from './Components/Game/Game.js'
import Trip from './Components/Trip-Planner/components/App.js'
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
  console.log(window.location)
  // if(window.location.pathname==="/" + basename + "#/game" || window.location.pathname==="/" + basename + "#/trip-planner") {
  //   return("");
  // }
  var basename = ""
  return(
    <div className="header">
      <div className="pages">
          <Link to={"/"}>ABIGAIL RICTOR</Link>
          <Link to={"/experience"}>EXPERIENCE</Link>
          <Link to={"/projects"}>PROJECTS</Link>
      </div>
      <div className="spacer"/>
      <div className="external">
        <a target="_blank" rel="noopener noreferrer" href="http://github.com/amrictor"><Github/></a>
        <a target="_blank" rel="noopener noreferrer" href="http://www.linkedin.com/in/abigail-rictor-528451110/"><LinkedIn /></a>
        <a target="_blank" rel="noopener noreferrer"  href="mailto:amrictor@gmail.com"><Mail/></a>
      </div>
    </div>
  )
}
  render() {
    const { location } = window;
    const currentKey = location.pathname.split("/")[1] || "/";
    const timeout = { enter: 400, exit: 400 };

    return (
      <TransitionGroup component="div" className="App">
        {this.navBar()}
          {/* <div className="scrollable"> */}
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
                <Switch location={location}>
                  <Route exact path="/" component={Home} />
                  <Route path="/experience" component={Experience} />
                  <Route path="/projects" component={Projects} />
                  <Route path="/game" component={Game} />
                  <Route path="/trip-planner" component={Trip} />
                </Switch>
              </div>
              
            </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default withRouter(App);
