import React, { Component } from 'react'
import { connect } from 'react-redux'
import './GameDetails.css'
import Player from './Player';
import { updatePlayer, sendGameOver } from '../../Actions/STSactions'


class GameContainer extends Component {
  player = new Player(this.props.player1.x,this.props.player1.y)
  state = {}

  componentDidMount() {
    this.setState({ctx:this.refs.canvas.getContext("2d")})
 
    if (this.props.game.isRunning) {
    this.rAF = requestAnimationFrame(this.updateAnimationState);
    document.addEventListener('keydown', (event) => {
      switch (event.key){
        case 'p':
          return ''
        case 'i':
          return console.log(this.state.player)
        case 'g':
          return this.props.sendGameOver()
        case 'ArrowRight':
          this.props.updatePlayer({ player:'player1',x: this.props.player1.x+50,y:this.props.player1.y})
          return this.player.moveRight(50)
          
        case 'ArrowLeft':
          this.props.updatePlayer({ player:'player1',x: this.props.player1.x-50,y:this.props.player1.y})
          this.player.moveLeft(50)
          
          return 
        default:
        break;

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


  updateAnimationState = () => {
    this.state.ctx.clearRect(0, 0, 500, 800);
    if (this.props.game.isRunning) {
      this.props.platforms.map(platform => this.state.ctx.fillRect(platform.X,platform.Y,100,20))
      //Update Player
      this.player.update(this.state.ctx)
      this.player.jump()
      this.checkCollision()
      //
      this.rAF = requestAnimationFrame(this.updateAnimationState);
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
  player: state.connections.playerAssigned,
  platforms:state.platforms

})

export default connect(mapStateToProps, { updatePlayer, sendGameOver })(GameContainer)