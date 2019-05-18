import React, { Component } from 'react';
import { Card, CardBody, CardImg } from 'reactstrap'
import { UncontrolledTooltip } from 'reactstrap'
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap'

import { IoMdEye as Preview, IoLogoGithub as Github } from 'react-icons/io'
import cpp from '../resources/C++.svg'


import graphics from '../resources/driver001024.png'
import game from '../resources/wordsmyth.png'


import './Project.css'

class Projects extends Component {


  softwareBadge(name, icon, placement){
    return (
      <div>
          <UncontrolledTooltip 
            placement={placement} 
            target={name.replace("++", "pp")
                        .replace("HTML", "HTML5")
                        .replace(" ", "")}
          >
            {name}
          </UncontrolledTooltip>
          {icon}
      </div>
    );
  }

  render() {
    return (
      <div className='experience'>
     
      <Container fluid>
        <Container className='projects'>
          <br/>
          <p className='lead'>Academic and Personal Projects</p>
          <hr/>
          <CardBody>
          <Row>
            <Col>
              <Card>
                <CardImg src={graphics}/>
                <div className="language">
                  {this.softwareBadge("C++", <img id="Cpp" height='25px' src={cpp} alt="C++"/>, "top")}
                </div>
                <CardBody>
                  Rendered with a ray-tracing engine written in C++ as part 
                  of the introductory graphics course offered at CSU.
                </CardBody>
                <div>
                  <Nav  className='float-right'>
                      <NavItem>
                        <NavLink href="http://github.com/amrictor"><Github/></NavLink>
                      </NavItem>
                  </Nav>
                </div>
              </Card>
              <hr/>
              <Card>
              <CardBody>
                  A webpage and corresponding server used for trip planning. 
                  Makes filtered queries to a database of airports around 
                  the world, allowing user to design, visualize, and save 
                  a trip with customizable optimization. Developed with a
                  team as part of the Software Engineering course offered at CSU.
                </CardBody>
                <CardImg bottom src={graphics}/>
              </Card>
              <hr/>
            </Col>
            <Col>
              <Card>
                <CardBody>
                  A device developed to monitor entries and exits to a 
                  room or building, sending live updates to a web page 
                  displaying current data and past trends.
                </CardBody>
                <img width='100%' src={game} alt="Fall 2018 CS410 Graphics Final Render"/>
                <div>
                  <Nav  className='float-right'>
                      <NavItem>
                        <NavLink href="http://github.com/amrictor"><Github/></NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="/game"><Preview/></NavLink>
                      </NavItem>
                  </Nav>
                </div>
              </Card>
              <hr/>
              <Card>
                <CardImg src={graphics}/>
                <CardBody>
                  Predictive text program used to generate poetry based
                  on thousands of poems scraped from PoetryFoundation.org.
                </CardBody>
              </Card>
              <hr/>
            </Col>
          </Row>
          </CardBody>
        </Container>
        <br/>
        <hr/>

      </Container>
    </div>
    )
  }
}
export default Projects;