import React, { Component } from 'react';
import { Container } from 'reactstrap'


class Home extends Component {
  
   
  render() {

    return (
      <Container fluid className='page'>
        <div className="heading">
          <div className="name">
            Abigail Rictor
          </div>
          <div className="grad">
            <b>B.S. in Computer Science, <br/>Colorado State University (December 2019)</b>
          </div>
        </div>
        <div className="summary">
          <div className = "details">
            <div>
              
                <p>
                  I am a Computer Science graduate from Colorado State University with an interest in the 
                  commonalities and interactions between people and computers. I am attracted to 
                  interdisciplinary work combining technology with the arts, particularly involving 
                  linguistics and design. These interests manifest in my work in front-end development 
                  and natural language processing. My ideal career encourages imaginative design solutions, 
                  both technical and artistic. Above all, I value creativity, diversity, and a respectful 
                  collaborative work environment. I am always seeking opportunities to expand my horizons 
                  and learn.
                </p>
            </div>
          </div>
        </div>
      </Container>
    
    )
  }
}
export default Home;