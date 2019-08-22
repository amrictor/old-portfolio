import React, { Component } from 'react';
import { CardBody } from 'reactstrap'
import { Container, Row, Col } from 'reactstrap'

import FishTank from './FishTank.jsx'
import resume from '../resources/Resume.pdf'

import apple from '../resources/bitmojis/apple.png'
import asdf from '../resources/bitmojis/asdf.png'
import cat from '../resources/bitmojis/cat.png'
import ctrlz from '../resources/bitmojis/ctrlz.png'
import math from '../resources/bitmojis/math.png'


class Home extends Component {
  
  render() {
    let headshots = [apple, asdf, cat, ctrlz, math]
    return (
      <Container fluid className='page'>
        {/* 'home lead heading page'> */}
        <Container>
          {/* <div className="home"> */}
            <div className="summary">
                <h1>Abigail Rictor</h1>
                <p>B.S. in Computer Science, <br/>Colorado State University (December 2019)</p>
                <p>Interested in interface design, full-stack development, and natural language 
                  processing. I love creative problem solving that brings different disciplines together,
                  especially when uniting technology and the liberal arts. 
                  Always seeking opportunities to expand my horizons and learn.</p>
                <hr/>
            </div>
            <FishTank/>
            {/* </div> */}
            
        {/* <Row>
          <Col md = '5'>
            <CardBody className="left-align">
              <h1>Abigail Rictor</h1>
              <p>B.S. in Computer Science, <br/>Colorado State University (December 2019)</p>
              <p>Interested in interface design, full-stack development, and natural language 
                processing. I love creative problem solving that brings different disciplines together,
                especially when uniting technology and the liberal arts. 
                Always seeking opportunities to expand my horizons and learn.</p>
              <hr/>
            </CardBody>
            
          </Col>
          
          <Col>
            <Row className="vertical-align">
              <Col>
                <img className="right-align clip-circle" src={headshots[Math.floor((Math.random() * headshots.length))]}/>
              </Col>
              <Col>
                <CardBody className="left-align">
                  <h className="contact">CONTACT</h>
                  <p>
                    <a href="mailto:amrictor@gmail.com">amrictor@gmail.com</a>
                    <br/>
                    <b>720-315-4159<br/>Fort Collins, Colorado</b>
                    <br/>
                    <a href={resume} target="_blank" rel="noopener noreferrer">View PDF Resume</a>
                  </p>
                  <p> </p>
                </CardBody>
              </Col>
             
            </Row>
          </Col>
        </Row> */}
        </Container>
      </Container>
    
    )
  }
}
export default Home;