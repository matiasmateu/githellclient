import "./Lobby.css"
import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import {userDisconnection,userConnection} from '../Actions/connections'

class Lobby extends Component {

    onClickButton = (event) => {
      if (event.target.name==='player1'){
        if (event.target.innerText==='Waiting...'){
          this.props.userConnection('player1')
          event.target.innerText = "Player 1 Ready"
        }else{
          event.target.innerText = "Waiting..."
          this.props.userDisconnection('player1')
        }
      }else{
        if (event.target.innerText==='Waiting...'){
          event.target.innerText = "Player 2 Ready"
          this.props.userConnection('player2')
        }else{
          event.target.innerText = "Waiting..."
          this.props.userDisconnection('player2')
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
  users:state
})

export default connect ( mapStateToProps,{userConnection,userDisconnection})(Lobby)