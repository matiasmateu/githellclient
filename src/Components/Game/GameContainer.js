import React, { Component } from 'react'
//import GameDetails from './GameDetails'
import { connect } from 'react-redux'
//import {gameOver} from '../../Actions/game'
import './GameDetails.css'
import { updatePlayer1 } from '../../Actions/STSactions'
import { Stage, Circle, Layer, } from 'react-konva'

class GameContainer extends Component {
  /*
  state = {
      isRunning : this.props.game.isRunning,
      x:1,
      y:220
    }
    */

  updateAnimationState = this.updateAnimationState.bind(this);
  componentDidMount() {
    this.rAF = requestAnimationFrame(this.updateAnimationState);
  }

  updateAnimationState() {

    // CHANGE THE STATE OF PLAYER
    this.props.updatePlayer1({ x: this.props.player1.x,y:this.props.player1.y +1})

    // CHECK GAME OVER
    /*
    if (this.state.x > 1000) {
      this.setState({ isRunning: false })
      this.props.gameOver()
    }*/

    if (this.props.game.isRunning) {
      this.rAF = requestAnimationFrame(this.updateAnimationState);
    }
  }

  render() {
  
      if (this.props.game.isRunning) {
        return (
          <Stage width={800} height={400}>
            <Layer>
              <Circle
                x={this.props.player1.x}
                y={this.props.player1.y}
                width={50}
                height={50}
                fill={'green'}
              />
              <Circle
                x={this.props.player2.x}
                y={this.props.player2.y}
                width={50}
                height={50}
                fill={'blue'}
              />
            </Layer>
          </Stage>
          /*<div className="mainContainer">
              <h1>PLAY!</h1>
              <GameDetails className="gameContainer"x={this.state.x} draw={()=>{
            this.setState({x:aux+10})
          }}/> 
          </div>*/
        );
      } else {
        return <h2>Game Over</h2>
      }
    


  }
}

const mapStateToProps = state => ({
  game: state.game,
  player1: state.player1,
  player2: state.player2

})

export default connect(mapStateToProps, { updatePlayer1 })(GameContainer)