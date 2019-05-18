import React, { Component } from 'react';
import { CardBody } from 'reactstrap'
import { Jumbotron,  } from 'reactstrap'

class Home extends Component {
  render() {
    return (
      <Jumbotron fluid>
      <CardBody>
        <h1 className="display-3">Abigail Rictor</h1>
        <p className="lead">B.S. in Computer Science, Colorado State University (December 2019)</p>
        <hr className="my-2" />
        <p>A Computer Science student interested in design, human computer interaction, and machine learning. Always seeking opportunities to expand my horizons and learn more.</p>
      </CardBody>
      </Jumbotron>
    
    )
  }
}
export default Home;