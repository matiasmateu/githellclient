import React, { Component } from 'react'
import { connect } from 'react-redux'
import './GameDetails.css'
import { updatePlayer, sendGameOver } from '../../Actions/STSactions'
import Platforms from './Platforms'

let nrOfPlatforms = 7
let platforms = []
let height = 800
let width = 500


class GameContainer extends Component {

  state = { ctx: null }

  componentDidMount() {
    this.setState({ ctx: this.refs.canvas.getContext("2d") })

    let position = 10
    for (var i = 0; i < nrOfPlatforms; i++) {
      platforms[i] = new Platforms(Math.random() * (width - 70), position)
      if (position < height - 20) position += ~~(height / nrOfPlatforms)
    }

    if (this.props.game.isRunning) {
      this.rAF = requestAnimationFrame(this.updateAnimationState);
      document.addEventListener('keydown', (event) => {
        switch (event.key) {
          case 'p':
            return this.state.ctx.fillRect(100, 100, 100, 100)
          case 'g':
            return this.props.sendGameOver()
          case 'ArrowRight':
            return this.props.updatePlayer({ player: 'player1', x: this.props.player1.x + 10, y: this.props.player1.y })
          case 'ArrowUp':
            return this.props.updatePlayer({ player: 'player1', x: this.props.player1.x, y: this.props.player1.y - 10 })
          case 'ArrowLeft':
            return this.props.updatePlayer({ player: 'player1', x: this.props.player1.x - 10, y: this.props.player1.y })
          case 'ArrowDown':
            return this.props.updatePlayer({ player: 'player1', x: this.props.player1.x, y: this.props.player1.y + 10 })
          case 'd':
            return this.props.updatePlayer({ player: 'player2', x: this.props.player2.x + 10, y: this.props.player2.y })
          case 'w':
            return this.props.updatePlayer({ player: 'player2', x: this.props.player2.x, y: this.props.player2.y - 10 })
          case 'a':
            return this.props.updatePlayer({ player: 'player2', x: this.props.player2.x - 10, y: this.props.player2.y })
          case 's':
            return this.props.updatePlayer({ player: 'player2', x: this.props.player2.x, y: this.props.player2.y + 10 })
          default:
            console.log(event.key)
            break;
        }
      });
    }
  }

  updateAnimationState = () => {
    if (this.props.game.isRunning) {
      this.rAF = requestAnimationFrame(this.updateAnimationState);

      for (var i = 0; i < nrOfPlatforms; i++) {
        platforms.map(platform => platform.draw(this.state.ctx))
      }
    }
  }

  render() {
    if (this.props.game.isRunning) {
      return (
        <div className="MainContainer">
          <canvas ref="canvas" width={500} height={800} />
        </div>
      );
    } else {
      return <h2>Game Over</h2>
    }
  }
}

const mapStateToProps = state => ({
  game: state.game,
  player1: state.player1,
  player2: state.player2,
  player: state.connections.playerAssigned

})

export default connect(mapStateToProps, { updatePlayer, sendGameOver })(GameContainer)