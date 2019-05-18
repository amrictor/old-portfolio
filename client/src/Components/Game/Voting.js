import React, { Component } from 'react';
import { CardBody, CardTitle } from 'reactstrap'
import { Button } from 'reactstrap'
import { Container } from 'reactstrap'

import loading from '../../resources/loadingicon.gif'
import '../Project.css'

class Voting extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  displayQuotes(){
    let data = [];
    console.log(this.props.game.submittedQuotes)
    for(let i in this.props.game.submittedQuotes) {
      let index = this.props.game.submittedQuotes[i][3]; //index not working!!
      if(index===this.props.player.index) continue;
      data.push(
        <Button block
          key={"voting_"+i}
          onClick={() => {
            this.props.vote(index, (this.props.game.indexOfIt === this.props.player.index))}}
          >
          {(this.props.game.indexOfIt===this.props.player.index
            && this.props.game.bonus[index]) 
            ? <div className="star">&#9733;</div> 
            : ""}
          <i>{this.props.game.submittedQuotes[i][0]}</i>
          <br/>
          {this.props.game.submittedQuotes[i][1] +"... "+ this.props.game.submittedQuotes[i][2]}
        </Button>)
    }
    
    return data;
  }
  screen() {
    const waiting = 
      <CardBody>
        <img src={loading} style={{'display': 'block', 'margin': '0 auto' }} height="45" alt="..."/>
        <CardTitle style={{'textAlign': 'center'}}>Waiting for other players to vote.</CardTitle>
      </CardBody>

    const quotes =
      <CardBody>
        <CardTitle><i>Choose one of the following quotes.</i></CardTitle>
        {this.displayQuotes()}
      </CardBody>
      
    return(
      (this.props.game.indexOfIt === this.props.player.index)
      ? quotes
      : waiting
    )
  }

  render() {
    const waiting = 
      <CardBody>
        <img src={loading} style={{'display': 'block', 'margin': '0 auto' }} height="45" alt="..."/>
        <div className='text' style={{'textAlign': 'center'}}>Waiting for other players to vote.</div>
      </CardBody>

    return ( 
          
      <Container fluid >
        { (this.props.game.submitted[this.props.player.index]) ? 
          waiting : 
          <CardBody>
            <div className="text"><i>{(this.props.game.indexOfIt === this.props.player.index) 
            ? "Award bonus points to the players' quotes."
            : "Vote for the quote below which you believe to be the original." }</i></div>
            <br/>
            {this.displayQuotes()}
          </CardBody>
        }
      </Container>
    )
  }
}
export default Voting;