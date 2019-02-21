import React, { Component } from 'react'
import { connect } from 'react-redux'
import './GameDetails.css'
import Player from './Player';
import { updatePlayer, sendGameOver } from '../../Actions/STSactions'
import Platforms from './Platforms'

let nrOfPlatforms = 7
let platforms = []
let height = 800
let width = 500
let player = new Player()
let circlesNum = 10
let circles = []

class GameContainer extends Component {
  state = {}

  componentDidMount() {
    this.setState({ ctx: this.refs.canvas.getContext("2d") })

    let position = 10
    for (var i = 0; i < nrOfPlatforms; i++) {
      platforms[i] = new Platforms(Math.random() * (width - 70), position)
      if (position < height - 20) position += ~~(height / nrOfPlatforms)
    }

    for (let i = 0; i < circlesNum; i++)
      circles.push([Math.random() * width, Math.random() * height, Math.random() * 100, Math.random() / 2])

    if (this.props.game.isRunning) {
      this.rAF = requestAnimationFrame(this.updateAnimationState);
      document.addEventListener('keydown', (event) => {
        switch (event.key) {
          case 'p':
            return ''
          case 'i':
            return console.log(this.state.player)
          case 'g':
            return this.props.sendGameOver()
          case 'ArrowRight':
            return player.moveRight(50)
          //this.props.updatePlayer({ player:'player1',x: this.props.player1.x+10,y:this.props.player1.y})
          case 'ArrowUp':
            return this.props.updatePlayer({ player: 'player1', x: this.props.player1.x, y: this.props.player1.y - 10 })
          case 'ArrowLeft':
            return player.moveLeft(50)
          //this.props.updatePlayer({ player:'player1',x: this.props.player1.x-10,y:this.props.player1.y})
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
            break;
        }
      });
    }
  }

  checkCollision() {
    platforms.forEach(function (platform) {

      if ((player.isFalling) &&
        (player.x < platform.X + 100) &&
        (player.x + player.width > platform.X) &&
        (player.y + player.height > platform.Y) &&
        (player.y + player.height < platform.Y + 20)
      ) {
        return player.fallStop()
      }
    })
  }

  moveBackground(deltaY) {
    for (let i = 0; i < circlesNum; i++) {
      if (circles[i][1] - circles[i][2] > height) {
        circles[i][0] = Math.random() * width
        circles[i][2] = Math.random() * 100
        circles[i][1] = 0 - circles[i][2]
        circles[i][3] = Math.random() / 2
      } else {
        circles[i][1] += deltaY;
      }
    }
  }

  // drawBackground() {
  //   this.state.ctx.fillStyle = 'rgba(255, 255, 255, ' + circles[i][3] + ')'
  //   this.state.ctx.beginPath()
  //   this.state.ctx.arc(circles[i][0], circles[i][1], circles[i][2], 0, Math.PI * 2, true);
  //   this.state.ctx.closePath()
  //   this.state.ctx.fill()
  // }

  updateAnimationState = () => {
    this.state.ctx.clearRect(0, 0, 500, 800);
    if (this.props.game.isRunning) {
      player.update(this.state.ctx)
      player.jump()
      this.rAF = requestAnimationFrame(this.updateAnimationState);
      for (var i = 0; i < nrOfPlatforms; i++) {
        platforms.map(platform => platform.draw(this.state.ctx))
      }
      // this.drawBackground()
      // this.moveBackground()
      this.checkCollision()

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