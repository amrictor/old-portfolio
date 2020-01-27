import React, { Component } from 'react';

import { HashRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

import { GoMarkGithub as Github } from 'react-icons/go'
import { FaLinkedin as LinkedIn } from 'react-icons/fa'
import { IoMdMail as Mail } from 'react-icons/io'
 
import './App.css';
import Home from './Components/Home.js'
import Experience from './Components/Experience.js'
import Projects from './Components/Projects.js'
import Game from './Components/Game/Game.js'
import Trip from './Components/Trip-Planner/components/App.js'
import "./slideTransition.scss";

import resume from './resources/Resume.pdf'
import { CSSTransition, TransitionGroup } from 'react-transition-group';


class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      header: true
    }
  }
  
  navBar(){
    if(window.location.pathname==="/" + basename + "#/game" || window.location.pathname==="/" + basename + "#/trip-planner") {
      return("");
    }
    console.log(window.location.pathname);
    var basename = "portfolio/"
    return(
      <React.Fragment>
      <header className="backgroundColor header">
        <Row>
          <Col xs='8'>
            <Nav>
              <NavItem>
                <NavLink href={"/" + basename + "#/"}>ABIGAIL RICTOR</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={"/" + basename + "#/experience"}>EXPERIENCE</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={"/" + basename + "#/projects"}>PROJECTS</NavLink>
              </NavItem>
              </Nav>
          </Col>
          <Col>
          <Nav className='float-right'>
            <NavItem>
              <NavLink href="http://github.com/amrictor"><Github/></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="http://www.linkedin.com/in/abigail-rictor-528451110/"><LinkedIn/></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="mailto:amrictor@gmail.com"><Mail/></NavLink>
            </NavItem>
            </Nav>
          </Col>
        </Row>
      </header>
      <div className='accentBackground'>
      <Container className='pad'>
      </Container>
    </div>
    </React.Fragment> 
    )
  }
  footer(){
    if(window.location.pathname==="/#/game" || window.location.pathname==="/#/trip-planner") {
      return("");
    }
    return(
      <div className='backgroundColor footer'>
        <Container className='options'>
          <br/><br/>
        </Container>
      </div>
    )
  }

  helpRender(component) {
    console.log(typeof component);
    return (
      {component}
    )
  }


  render() {
    const { location } = window;
    const currentKey = location.pathname.split("/")[1] || "/";
    const timeout = { enter: 800, exit: 400 };

    console.log(currentKey)

    return (
      <div className="App">
          {this.navBar()}
          <div className="scrollable body">
           

            
            <Router>
              {/* <TransitionGroup component="div" className="App">
                <CSSTransition
                  key={currentKey}
                  classNames="pageSlider"
                  mountOnEnter={false}
                  unmountOnExit={true}
                  timeout={timeout}
                > */}
                  <div className="page">
                    <Switch>
                      <Route exact path="/" component={Home} />
                      <Route path="/experience" component={Experience} />
                      <Route path="/projects" component={Projects} />
                      <Route path="/game" component={Game} />
                      <Route path="/trip-planner" component={Trip} />
                    </Switch>
                  </div>
                {/* </CSSTransition>
                </TransitionGroup> */}
            </Router>
          </div>
          {/* {this.footer()} */}
        </div>
        
    );
  }
}

export default App;
