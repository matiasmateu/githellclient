import React, { Component } from 'react'
import { connect } from 'react-redux'
import './GameDetails.css'
import Player from './Player';
import { updatePlayer, sendGameOver } from '../../Actions/STSactions'
import morty from './assets/morty.gif';
import rick from './assets/rick.gif';
import platform from './assets/platform.gif'
import flag from './assets/flag.gif'
import BCK from './assets/BCK.gif'

class GameContainer extends Component {
  player = new Player(this.props.player1.x, this.props.player1.y, 50, 52, morty)
  player2 = new Player(this.props.player1.x, this.props.player1.y, 80, 94, rick)
  state = {}
  platform = new Image()
  background = new Image()
  flag = new Image()

  componentDidMount() {
    this.setState({ ctx: this.refs.canvas.getContext("2d") })

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
          if(this.props.playerAssigned==='player1'){
            this.props.updatePlayer({ player:this.props.playerAssigned,x: this.player.x+50,y:this.player.y})
            return this.player.moveRight(50)
          }else{
            this.props.updatePlayer({ player:this.props.playerAssigned,x: this.player2.x+50,y:this.player2.y})
            return this.player2.moveRight(50)
          }
        case 'ArrowLeft':
        if (this.props.playerAssigned==='player2'){
          this.props.updatePlayer({ player:this.props.playerAssigned,x: this.player2.x-50,y:this.player2.y})
          return  this.player2.moveLeft(50)
        }else{
          this.props.updatePlayer({ player:this.props.playerAssigned,x: this.player.x-50,y:this.player.y})
          return  this.player.moveLeft(50)
        }
          
          
          
        default:
        break;
      }
    })
  }
  }
  checkCollision(player) {
    this.props.platforms.forEach(function (platform) {
      if ((player.isFalling) &&
        (player.x < platform.X + 100) &&
        (player.x + player.width > platform.X) &&
        (player.y + player.height > platform.Y) &&
        (player.y + player.height < platform.Y + 20)
      )
        return player.fallStop()
    })
  }
  checkFlagCollision(player) {
    this.props.flag.forEach(function (flag) {
      if ((player.isFalling) &&
        (player.x < flag.X + 100) &&
        (player.x + player.width > flag.X) &&
        (player.y + player.height > flag.Y) &&
        (player.y + player.height < flag.Y + 20)
      )
        return player.scorePoints()     
    })
  }
  drawBackground() {
    this.background.src = BCK
    this.state.ctx.drawImage(this.background, 0, 0)
  }
  updateAnimationState = () => {
    this.state.ctx.clearRect(0, 0, 680, 1410);
    this.drawBackground()
    if (this.props.game.isRunning) {
      let ctx2 = this.state.ctx
      ctx2.fillStyle = "white"
      this.platform.src = platform
      this.flag.src = flag
      this.props.platforms.map(platform => ctx2.drawImage(this.platform, platform.X, platform.Y, 100, 28))
      this.props.flag.map(flag => ctx2.drawImage(this.flag, flag.X, flag.Y, 100, 100))

      //CONCILIATION
      if ((this.player.x!==this.props.player1.x)){
        this.player.setPosition(this.props.player1.x,this.props.player1.y)
      }
      if (this.player2.x!==this.props.player2.x){
        this.player2.setPosition(this.props.player2.x,this.props.player2.y)
      }
      //Update Player
      this.player2.update(this.state.ctx)
      this.player.update(this.state.ctx)
      this.player.jump()
      this.player2.jump()
      this.checkCollision(this.player)
      this.checkCollision(this.player2)
      this.checkFlagCollision(this.player)
      this.checkFlagCollision(this.player2)     
      ctx2.font = "30px Arial"
      ctx2.fillText("Rick: " + this.player2.score + " pts", 1220, 45)
      ctx2.fillText("Morty: " + this.player.score + " pts", 1220, 80)
      this.rAF = requestAnimationFrame(this.updateAnimationState);
    }
  }
  render() {
    if (this.props.game.isRunning) {
      return (
        <div className="MainContainer">
          <canvas ref="canvas" width={1410} height={680} />
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
  platforms: state.platforms,
  flag: state.flag,
  playerAssigned: state.connections.playerAssigned
})

export default connect(mapStateToProps, { updatePlayer, sendGameOver })(GameContainer)