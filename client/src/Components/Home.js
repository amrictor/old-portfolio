import React, { Component } from 'react';
import { CardBody } from 'reactstrap'
import { Jumbotron, Container, Row, Col } from 'reactstrap'

import resume from '../resources/Resume.pdf'


class Home extends Component {
  render() {
    return (
      <Jumbotron fluid className='bodyBackground home lead heading'>
        <Container>
        <Row>
          <Col md = '5'>
            <CardBody className="left-align">
              <h1>Abigail Rictor</h1>
              <p>B.S. in Computer Science, <br/>Colorado State University (December 2019)</p>
              <p>A Computer Science student interested in interface design and natural language processing. Always seeking opportunities to expand my horizons and learn more.</p>
              <hr/>
            </CardBody>
            
          </Col>
          
          <Col>
            <Row className="vertical-align">
              <Col>
                <img className="right-align clip-circle" src="https://media.licdn.com/dms/image/C4E03AQEegtOmhJRqXg/profile-displayphoto-shrink_200_200/0?e=1564012800&v=beta&t=zAkKzsRzc8oxnaMR9gkfFZIrHYWrwnZ9Jdvaf4rJXIM"/>
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
      </Jumbotron>
    
    )
  }
}
export default Home;