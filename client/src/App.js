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

import resume from './resources/Resume.pdf'


class App extends Component {
  navBar(){
    if(window.location.pathname==="/game") {
      return("");
    }
    return(
      <header className="App-header">
        <Row>
          <Col xs='8'>
            <Nav>
              <NavItem>
                <NavLink href="/">Abigail Rictor</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/experience">Experience</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/projects">Projects</NavLink>
              </NavItem>
              <NavItem>
              <NavLink href="/game">Game</NavLink>
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
    )
  }
  footer(){
    if(window.location.pathname==="/game") {
      return("");
    }
    return(
      <div className='footer'>
        <Container className='options'>
          <br/>
          <a href={resume} target="_blank" rel="noopener noreferrer">View PDF Resume</a>
          <br/>
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
            </div>
          </Router>
          {this.footer()}
        </div>
        
    );
  }
}

export default App;
