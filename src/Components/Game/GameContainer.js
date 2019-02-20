import React, { Component } from 'react'
import { connect } from 'react-redux'
import './GameDetails.css'
import { updatePlayer1 } from '../../Actions/STSactions'
import { Stage, Circle, Layer, } from 'react-konva'

class GameContainer extends Component {

  updateAnimationState = this.updateAnimationState.bind(this);
  componentDidMount() {
    this.rAF = requestAnimationFrame(this.updateAnimationState);
  }

  updateAnimationState() {
    // CHANGE THE STATE OF PLAYER
    this.props.updatePlayer1({ x: this.props.player1.x,y:this.props.player1.y +1})

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