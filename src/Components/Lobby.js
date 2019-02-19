import "./Lobby.css"
import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import {socket} from '../Store'

class Lobby extends Component {
  sendUserDisconnectionToServer (user) {
    socket.send(JSON.stringify({ type: "Logout", user: user }))
  }

  sendUserConnectionToServer (user) {
    socket.send(JSON.stringify({ type: "Login", user: user }))
  }


  onClickButton = (event) => {
    if (event.target.name === 'player1') {
      if (event.target.innerText === 'Waiting...') {
        this.sendUserConnectionToServer('player1')
        event.target.innerText = "Player 1 Ready"
      } else {
        event.target.innerText = "Waiting..."
        this.sendUserDisconnectionToServer('player1')
      }
    } else {
      if (event.target.innerText === 'Waiting...') {
        event.target.innerText = "Player 2 Ready"
        this.sendUserConnectionToServer('player2')
      } else {
        event.target.innerText = "Waiting..."
        this.sendUserDisconnectionToServer('player2')
      }
    }
  }

  render() {
    return (
      <div className="Buttons">
        <h1 className="Lobby">LOBBY</h1>
        <button name="player1" className="Button1" onClick={this.onClickButton}>
          Waiting...
          </button>
        <button name="player2" className="Button2" onClick={this.onClickButton}>
          Waiting...
          </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state
})

export default connect(mapStateToProps)(Lobby)