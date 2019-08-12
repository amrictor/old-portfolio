import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardTitle,
         Container, Row, Col,
         Nav, NavItem, NavLink,
         UncontrolledTooltip, UncontrolledCarousel
        } from 'reactstrap'
import {IconContext} from 'react-icons';
import { IoMdEye as Preview, IoLogoGithub as Github } from 'react-icons/io'
import cpp from '../resources/C++.svg'

import hci from '../resources/CS464FinalReport.pdf'
// import notebook from '../resources/RictorProjectReport.html'

import graphics from '../resources/anim1024.gif'

import carving from '../resources/carving.gif'
import brushonoff from '../resources/brushonoff.gif'
import brushsize from '../resources/brushsize.gif'
import rotate from '../resources/rotate.gif'
import game from '../resources/game.gif'
import trip_planner from '../resources/trip_planner.gif'
import poem1 from '../resources/poem1.png'
import poem2 from '../resources/poem2.png'


import './Project.css'
import { FaArchive } from 'react-icons/fa';

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
  projectCard(project, side){
    project.images = project.images.map((item) =>  {
      return({'src': item, 'caption': ""})
    ;})

    return(
      <IconContext.Provider value={{ size: '1.5em' }}>
      <React.Fragment>
        <Card>
          <UncontrolledCarousel items={project.images} autoPlay={false} indicators={false} controls={project.images.length>1}/>
          <CardBody>
          <CardTitle><b>{project.title}</b></CardTitle>
            {project.description}
          </CardBody>
          <div className="icons">
            <Nav  className={(side==='left') ? 'float-right': 'float-left'}>
                <NavItem>
                  <NavLink href={project.github} target="_blank" rel="noopener noreferrer"><Github/></NavLink>
                </NavItem>
            </Nav>
            {(project.paper !== undefined) ?
              <Nav  className={(side==='left') ? 'float-right': 'float-left'}>
                <NavItem>
                  <NavLink href={project.paper} target="_blank" rel="noopener noreferrer"><IconContext.Provider value={{ size: '1.3em' }}><FaArchive/></IconContext.Provider></NavLink>
                </NavItem>
              </Nav> : ""
              }
              {(project.preview !== undefined) ?
              <Nav  className={(side==='left') ? 'float-right': 'float-left'}>
                <NavItem>
                  <NavLink href={project.preview} target="_blank" rel="noopener noreferrer"><Preview/></NavLink>
                </NavItem>
              </Nav> : ""
              }
          </div>
        </Card>
        <br/>
      </React.Fragment>
      </IconContext.Provider>
    );
  }

  render() {
    let basename = "portfolio/"
    return (
      <Container fluid className='bodyBackground noMargin page'>
        <Container className='projects'>
          <br/>
          <p className='lead heading black'>Academic and Personal Projects</p>
          <hr/>
          <CardBody>
          <Row>
            <Col lg>
            {this.projectCard(
                {
                  'images': [poem1, poem2],
                  'title' : "Linguistics and Text Prediction",
                  'description' : 
                      "Multiple approaches to generating text, specifically poetry, \
                      based on thousands of samples found online. A look at neural \
                      networks, Markov chains, and pre- and post- processing to filter \
                      out undesirable outputs.",
                  'github' : "https://github.com/amrictor/MachineLearningFinal",
                  'paper' : "https://nbviewer.jupyter.org/github/amrictor/MachineLearningFinal/blob/master/FinalProject/RictorProjectReport.ipynb"
                }, 'left'
              )}
             
              {this.projectCard(
                {
                  'images': [carving, brushonoff, brushsize, rotate],
                  'title' : "Subtractive Art in Virtual Reality",
                  'description' : 
                      "A program developed in Unity with C# to be used with an \
                      Oculus Rift to carve in a voxel medium. Tested against \
                      physical 3D art forms in a user study.",
                  'github' : "https://github.com/csu-hci-projects/Subtractive_Art-v1.0",
                  'paper' : hci
                }, 'left'
              )}
              
            </Col>
            <Col lg>
            {this.projectCard(
                {
                  'images': [game],
                  'title' : "Wordsmyth Web Game",
                  'description' : 
                      "Inspired by 1998 board game Wise or Otherwise, a quote finishing web \
                      game to play with a group. Client-Server communication using Java \
                      Websockets and a ReactJS front end.",
                  'github' : "https://github.com/amrictor/portfolio/tree/master/server"
                }, 'right'
              )}
            {this.projectCard(
                {
                  'images': [graphics],
                  'title' : "Ray Tracing Rendering Engine",
                  'description' : 
                      "Recursive ray tracing engine written in C++ for producing images \
                      of 3D space, in user defined lighting and camera conditions, \
                      containing spheres and .OBJ models to which scalar, rotational, \
                      or transpositional transformations can be applied.",
                  'github' : "https://github.com/amrictor/ray-tracer"
                }, 'right'
              )}
              {this.projectCard(
                {
                  'images': [trip_planner],
                  'title' : "Trip Planner",
                  'description' : 
                      "A webpage and corresponding server used for trip planning. \
                      Makes filtered queries to a database of airports around \
                      the world, allowing user to design, visualize, and save \
                      a trip with customizable optimization. Developed with a \
                      team as part of the Software Engineering course offered at CSU.",
                  'github' : "https://github.com/amrictor/trip-planner"
                }, 'right'
              )}
              
            </Col>
          </Row>
          </CardBody>
        </Container>
        <br/>
      </Container>
    )
  }
}
export default Projects;