import "./Lobby.css"
import React from 'react'
import { Component } from 'react'

export default class Lobby extends Component {

   
    onClickButton = (event) => {
      if (event.target.innerText==="User Ready!"){
        event.target.innerText = "Waiting..."
      }else{
        event.target.innerText = "User Ready!"
      }
      
    }

    render() {
        return (
            <div className="Buttons">
                <h1 className="Lobby">LOBBY</h1>
                <button className="Button1" onClick={this.onClickButton}>
                    Waiting...
          </button>
                <button className="Button2" onClick={this.onClickButton}>
                Waiting...
          </button>
            </div>
        );
    }
}

