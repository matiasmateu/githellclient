import React, { Component } from 'react'
import GameDetails from './GameDetails'
import { connect } from 'react-redux'
//import {gameOver} from '../../Actions/game'
import './GameDetails.css'
// import { userConnection } from '../../Actions/connections';

class GameContainer extends Component {

  player1 = {entity:'player1', x:100, y:50}
  player2 = {entity:'player2',x:300,y:50}

  state = {
    isRunning: this.props.game.isRunning,
    x: 1,
    y: 220
  }

  updateAnimationState = this.updateAnimationState.bind(this);

  componentDidMount() {
    this.rAF = requestAnimationFrame(this.updateAnimationState);
  }

  updateAnimationState() {
    this.setState(prevState => ({ x: prevState.x + 10 }));
    if (this.state.x > 1000) {
      this.setState({ isRunning: false })
      this.props.gameOver()
    }

    if (this.state.isRunning) {
      this.rAF = requestAnimationFrame(this.updateAnimationState);
    }
  }

render() {
  let aux = this.state.x
  if (this.props.game.isRunning) {
    this.sendDrawPlayerToServer()

    return (
      <div className="mainContainer">
        <h1>PLAY!</h1>
        <GameDetails className="gameContainer" x={this.state.x} draw={() => {
          this.setState({ x: aux + 10 })
        }} />
      </div>
    );
  } else {
    return <h2>Game Over</h2>
  }

}
}

const mapStateToProps = state => ({
  game: state.game
})

export default connect(mapStateToProps)(GameContainer)