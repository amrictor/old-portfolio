import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardTitle,
         Container, Row, Col,
         Nav, NavItem, NavLink,
         UncontrolledTooltip, UncontrolledCarousel
        } from 'reactstrap'

import { IoMdEye as Preview, IoLogoGithub as Github } from 'react-icons/io'
import cpp from '../resources/C++.svg'

import hci from '../resources/HCI.pdf'
// import notebook from '../resources/RictorProjectReport.html'

import graphics from '../resources/anim1024.gif'

import carving from '../resources/carving.gif'
import brushonoff from '../resources/brushonoff.gif'
import brushsize from '../resources/brushsize.gif'
import rotate from '../resources/rotate.gif'
import game from '../resources/wordsmyth.png'
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
      <React.Fragment>
        <Card className={side}>
          <UncontrolledCarousel items={project.images} autoPlay={false} indicators={false} controls={project.images.length>1}/>
          <CardBody>
          <CardTitle><b>{project.title}</b></CardTitle>
            {project.description}
          </CardBody>
          <div>
            <Nav  className={(side==='left') ? 'float-right': 'float-left'}>
                <NavItem>
                  <NavLink href={project.github} target="_blank" rel="noopener noreferrer"><Github/></NavLink>
                </NavItem>
            </Nav>
            {(project.paper !== undefined) ?
              <Nav  className={(side==='left') ? 'float-right': 'float-left'}>
                <NavItem>
                  <NavLink href={project.paper} target="_blank" rel="noopener noreferrer"><FaArchive/></NavLink>
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
        <hr/>
      </React.Fragment>
    );
  }

  render() {
    return (
      <div className='backgroundC'>
      <Container fluid>
        <Container className='projects'>
          <br/>
          <p className='lead heading white'>Academic and Personal Projects</p>
          <hr/>
          <CardBody>
          <Row>
            <Col>
            {this.projectCard(
                {
                  'images': [poem1, poem2],
                  'title' : "Linguistics and Text Prediction",
                  'description' : 
                      "Multiple approaches to generating text, specifically poetry, \
                      based on thousands of samples found online. A look at neural \
                      networks, Markov chains, and pre- and post- processing to filter \
                      out undesirable outputs.",
                  'github' : "https://github.com/csu-hci-projects/Subtractive_Art-v1.0",
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
            <Col>
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
              <br/>
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
                  'github' : "https://github.com/amrictor/trip-planner",
                  'preview' : "/trip-planner"
                }, 'right'
              )}
              
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