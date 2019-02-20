import "./Lobby.css"
import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import {userIsNowConnected,userIsNowDisconnected,sendNewGameRequest} from '../Actions/STSactions'


class Lobby extends Component {

  onClickButton = (event) => {
    (event.target.innerText==="Ready") ? this.props.userIsNowDisconnected(event.target.name)  : this.props.userIsNowConnected(event.target.name)
  }

  startGameButton = (event) => {
    if (event.target.innerText === "START GAME") {
      this.props.sendNewGameRequest()
      
    }
  }

  render() {
     return (
      <div className="Buttons">
        <h1 className="Lobby">LOBBY</h1>
        <button name="player1" className="Button1" onClick={this.onClickButton}>
         {(this.props.users.connections.player1)? "Ready" : "Waiting..."}
        </button>
        <button name="player2" className="Button2" onClick={this.onClickButton}>
        {(this.props.users.connections.player2)? "Ready" : "Waiting..."}
        </button>
        <button name="start" className="startgame" onClick={this.startGameButton}>
          {(this.props.users.connections.player1 && this.props.users.connections.player2) ? "START GAME" : "Waiting for Players"}
        </button>
      </div>
    );
     }
}

const mapStateToProps = state => ({
  users: state
})


export default connect(mapStateToProps,{userIsNowConnected,userIsNowDisconnected,sendNewGameRequest})(Lobby)

