import "./Lobby.css"
import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { userDisconnection, userConnection } from '../Actions/connections'

class Lobby extends Component {

  onClickButton = (event) => {
    (event.target.innerText==="Ready") ? this.props.userDisconnection(event.target.name) : this.props.userConnection(event.target.name)
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state
})

export default connect(mapStateToProps, { userConnection, userDisconnection })(Lobby)