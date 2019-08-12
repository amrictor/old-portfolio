import React, { Component } from 'react';
import { CardBody } from 'reactstrap'
import { Jumbotron, Container, Row, Col } from 'reactstrap'

import resume from '../resources/Resume.pdf'
import headshot from '../resources/headshot.png'


class Home extends Component {
  render() {
    return (
      <Container fluid className='page'>
        {/* 'home lead heading page'> */}
        <Container>
        <Row>
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
                <img className="right-align clip-circle" src={headshot}/>
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
        </Row>
        </Container>
      </Container>
    
    )
  }
}
export default Home;