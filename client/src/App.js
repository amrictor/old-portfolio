import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";
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

import resume from './resources/Resume.pdf'


class App extends Component {
  navBar(){
    if(window.location.pathname==="/game" || window.location.pathname==="/trip-planner") {
      return("");
    }
    return(
      <React.Fragment>
      <header className="backgroundColor">
        <Row>
          <Col xs='8'>
            <Nav>
              <NavItem>
                <NavLink href="/">ABIGAIL RICTOR</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/experience">EXPERIENCE</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/projects">PROJECTS</NavLink>
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
    if(window.location.pathname==="/game" || window.location.pathname==="/trip-planner") {
      return("");
    }
    return(
      <div className='backgroundColor'>
        <Container className='options'>
          <br/><br/>
        </Container>
      </div>
    )
  }


  render() {
    return (
      <div className="App">
          {this.navBar()}
          <Router>
            <div>
              <Route exact path="/" component={Home} />
              <Route path="/experience" component={Experience} />
              <Route path="/projects" component={Projects} />
              <Route path="/game" component={Game} />
              <Route path="/trip-planner" component={Trip} />
            </div>
          </Router>
          {this.footer()}
        </div>
        
    );
  }
}

export default App;
