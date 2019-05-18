import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

import './Game.css'
import Login from './Login.js'
import Choice from './Choice.js'
import Writing from './Writing.js'
import Voting from './Voting.js'
import End from './End.js'

import { FaPenFancy as Pen } from 'react-icons/fa'


class Game extends Component {
  constructor(props){
    super(props);
    this.state = {
      game: {
        numPlayers: 0,
        phase: -1,
        round: 0,
        players: [],
        scores: [],
        quote: [],
        quotes: [],
        time: null,
        submitted: [],
        bonus: [],
        indexOfIt: -1
      },
      player: {
        quote: [],
        username: "",
        index: -1
      },
      inGame: false
    };
    this.connection = null;
    this.choose = this.choose.bind(this)
    this.vote = this.vote.bind(this)
    this.end = this.end.bind(this)
    this.reset = this.reset.bind(this)
    this.setCookie = this.setCookie.bind(this);
    this.checkCookie = this.checkCookie.bind(this);
    this.updateGameBasedOnResponse = this.updateGameBasedOnResponse.bind(this);
    this.updateIndex = this.updateIndex.bind(this);
    this.writeQuote = this.writeQuote.bind(this);
    this.resetState = this.resetState.bind(this);
    this.toggleInGame = this.toggleInGame.bind(this);
  }

  componentDidMount() {
    this.connection = new WebSocket('ws://127.0.0.1:4444');
    this.connection.onopen = function () {
      console.log('Connected!');
    };

    // Log errors
    this.connection.onerror = function (error) {
      console.log('WebSocket Error ' + error);
    };

    // Log messages from the server
    this.connection.onmessage = function (e) {
      // console.log('Server: ' + e.data);
      let broadcast = JSON.parse(e.data);
      let keys = Object.keys(broadcast);
      if (broadcast['end']) this.resetState();
      else {
        for(let i = 0; i<keys.length; i++) {
          if(this.state.game.phase !== 1 && keys[i]==='quote') continue;
          this.updateGameBasedOnResponse(keys[i], broadcast[keys[i]])
        }
      }
    }.bind(this);

    this.connection.onclose = function (e) {
      console.log('Connection lost');
      //THIS FUNCTION IS CALLED ON REFRESH IN FIREFOX BUT NOT CHROME
      // DELETING COOKIES BREAKS FUNCTIONALITY IN FIREFOX
      // document.cookie = "username=;expires=Wed, 14 Jun 2017 07:00:00 GMT;path=/";
      // document.cookie = "index=;expires=Wed, 14 Jun 2017 07:00:00 GMT;path=/";
    };
    this.checkCookie();
  }

  updateGameBasedOnResponse(key, value) {
    let state = this.state;
    let item = 'game'
    if(key === 'username') {
      this.setCookie(value, 365);
      item = 'player';
    }
    state[item][key] = value;
    this.setState(state);
    this.updateIndex();
    // console.log(this.state)
  }

  updateIndex(){
    let state = this.state;
    state.player.index = this.state.game.players.indexOf(this.state.player.username);
    this.setState(state);
  }

  writeQuote(quote) {
    let state = this.state;
    state.player.quote=state.game.quote;
    state.player.quote[2]=quote;
    this.setState(state);
  }
  resetState() {
    let state = {
      game: {
        numPlayers: 0,
        phase: -1,
        players: [],
        scores: [],
        quote: [],
        quotes: [],
        time: null,
        indexOfIt: -1
      },
      player: {
        quote: [],
        username: "",
        index: -1
      },
      inGame: false
    };
    this.setState(state);
  }

  toggleInGame() {
    this.setState({inGame: !this.state.inGame})

  }
  setCookie(username, exdays=0) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = (exdays===0) ? "" : "expires="+d.toUTCString() + ";path=/";
    document.cookie = "username=" + username + ";" + expires;
    // document.cookie = "index=" + index + ";" + expires;
  }
  getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  checkCookie() {
    let user = this.getCookie("username");
    let index = Number(this.getCookie("index"));
    if (user !== "") {
      let player = this.state.player;
      player.username = user;
      player.index = index;
      this.setState(player);
      this.setState({inGame: true});
    }
  }
  choose(quote){
    quote[3] = this.state.player.index;
    let request = {
      'type': 'request',
      'action': 'choose',
      'quote': quote,
      'name': this.state.player.username,
      'index': this.state.player.index
    };
    this.connection.send(JSON.stringify(request));
  }
  vote(index, bonusPoints=false){
    console.log("voting index " + index)
    let request = {
      'type': 'request',
      'action': bonusPoints ? 'bonus' : 'vote',
      'voteIndex': index,
      'name': this.state.player.username,
      'index': this.state.player.index
    };
    this.connection.send(JSON.stringify(request));
    
  }
  end(){
    let request = {
      'type': 'request',
      'action': 'end',
      'name': this.state.player.username,
      'index': this.state.player.index
    };
    this.connection.send(JSON.stringify(request));
  }
  reset(){
    this.resetState();
    this.setCookie("", "", -1);
    console.log("The game is ending.");
    let request = {
      'type': 'request',
      'action': 'reset',
      'name': this.state.player.username,
      'index': this.state.player.index
    };
    this.connection.send(JSON.stringify(request));
  }
  displayScores(){
    let data = [];
    for (let i = 0; i<this.state.game.scores.length; i++) {
      data.push(<Col key={this.state.game.players[i]+"_"+i}>{this.state.game.players[i] +": " + this.state.game.scores[i]}</Col>)
    }
    return(
      <Container>
      <div className="username curved">
        {data}
      </div>
      </Container>
    )
  }
  
  render() {
    const page = 
      this.state.game.phase === -1 ? 
        <Login  
          updateGameBasedOnResponse={this.updateGameBasedOnResponse}
          player={this.state.player}
          game={this.state.game}
          inGame={this.state.inGame}
          toggleInGame={this.toggleInGame}
          setCookie={this.setCookie}
          connection={this.connection}
        /> :
        this.state.game.phase === 0 ? 
        <Choice
          choose={this.choose}
          updateGameBasedOnResponse={this.updateGameBasedOnResponse}
          player={this.state.player}
          game={this.state.game}
          quoteChoices={this.state.quoteChoices}
          connection={this.connection}
        /> :
        this.state.game.phase === 1 ? 
        <Writing
          updateGameBasedOnResponse={this.updateGameBasedOnResponse}
          player={this.state.player}
          choose={this.choose}
          writeQuote={this.writeQuote}
          game={this.state.game}
          connection={this.connection}
        /> :
        this.state.game.phase === 2 ? 
        <Voting
          vote={this.vote}
          updateGameBasedOnResponse={this.updateGameBasedOnResponse}
          player={this.state.player}
          game={this.state.game}
          connection={this.connection}
        /> :
        this.state.game.phase === 3 ? 
        <End
          player={this.state.player}
          game={this.state.game}
          connection={this.connection}
        />
      : "";

    return (
      <div className="game">
        <div className="title">
        <Row>
          <Col sm="3"></Col>
          
          <Col sm="6">
            <Pen className="icon"/> Wordsmyth
          </Col>
          <Col sm="3">
            <div className="right">
              {this.state.game.phase!==-1 && this.state.game.phase!==3 ? "ROUND " + this.state.game.round : ""}
            </div>
          </Col>
        </Row>
        </div>
        <div className="username">
          {(this.state.game.phase !==-1) ? this.state.player.username : <br/>}
        </div>
        <div className="timer">{(this.state.game.phase !== -1  && this.state.game.phase !==3) ? this.state.game.time : ""}</div>
        <div>      
          {page}
          {this.displayScores()}  
          {(this.state.game.phase !==-1) ?
          <div>
            <br/>
            
            <Button
              className="shadow"
              style={{marginLeft: '35px', marginBottom: '20px', borderRadius:'40px'}}
              onClick={this.state.game.phase === 3 ? this.reset : this.end}
              disabled={this.state.game.phase === -1}
            >
              {this.state.game.phase === 3 ? "Play Again!" : "End Game"}
            </Button>
          </div>
          :
          ""}  
        </div>
      </div>
    )
  }
}
export default Game;