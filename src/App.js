import React, { Component } from 'react';
import Lobby from "./Components/Lobby"
import {connect} from 'react-redux'
import './App.css';
import GameContainer from './Components/Game/GameContainer'

class App extends Component {

  render() {
    if (this.props.game.isRunning){
      return <GameContainer />
    }else{
      return (
        <Lobby />
      );
    }
    
  }
}

const mapStateToProps = state => ({
  game: state.game
})


export default connect(mapStateToProps)(App)

