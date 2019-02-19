import React, {Component} from 'react'
import GameDetails from './GameDetails'
import {connect} from 'react-redux'
import {gameOver} from '../../Actions/game'
import './GameDetails.css'

class GameContainer extends Component{
    state = {
        x:1,
        y:220
      }
      updateAnimationState = this.updateAnimationState.bind(this);
      componentDidMount() {
        this.rAF = requestAnimationFrame(this.updateAnimationState);
      }
    
      updateAnimationState() {
        this.setState(prevState => ({ x: prevState.x + 10 }));
        if(this.state.x>1000){
          this.props.gameOver()
        }
    
        if (this.props.game.isRunning){
          this.rAF = requestAnimationFrame(this.updateAnimationState);
        }
      }
    
      render() {
        let aux =  this.state.x
        if (this.props.game.isRunning){
          return (
            <div className="mainContainer">
                <h1>PLAY!</h1>
                <GameDetails className="gameContainer"x={this.state.x} draw={()=>{
              this.setState({x:aux+10})
            }}/> 
            </div>
            
            
          );
        }else{
         return <h2>Game Over</h2>
        }
        
      }
    }
    
const mapStateToProps = state => ({
    game: state.game
})
      
export default connect(mapStateToProps,{gameOver})(GameContainer)