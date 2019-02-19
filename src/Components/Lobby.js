import "./Lobby.css"
import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { socket } from '../Store'



class Lobby extends Component {
  sendUserDisconnectionToServer(user) {
    socket.send(JSON.stringify({ type: "Logout", user: user }))
  }

  sendUserConnectionToServer(user) {
    socket.send(JSON.stringify({ type: "Login", user: user }))
  }

  sendGameStartedToServer(users) {
    console.log(users)
    socket.send(JSON.stringify({ type: "NEW GAME", users: users }))
  }

  onClickButton = (event) => {
    (event.target.innerText === "Ready") ? this.sendUserDisconnectionToServer(event.target.name) : this.sendUserConnectionToServer(event.target.name)
  }

  startGameButton = (event) => {
    if (event.target.innerText === "START GAME") {
      this.sendGameStartedToServer()
    }
  }

  render() {
    return (
      <div className="Buttons">
        <h1 className="Lobby">LOBBY</h1>
        <button name="player1" className="Button1" onClick={this.onClickButton}>
          {(this.props.users.connections.player1) ? "Ready" : "Waiting..."}
        </button>
        <button name="player2" className="Button2" onClick={this.onClickButton}>
          {(this.props.users.connections.player2) ? "Ready" : "Waiting..."}
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


export default connect(mapStateToProps)(Lobby)

