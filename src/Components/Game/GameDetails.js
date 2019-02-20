import React ,{ Component } from 'react'
import {Stage,Circle,Layer,} from 'react-konva'
import {connect} from 'react-redux'

 class GameDetails extends Component{
  

    componentDidMount(){
        this.props.draw()
    }

    render(){
        return(<div>
            <Stage width={window.innerWidth} height={window.innerHeight}>
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
            </div>)
    } 
}

const mapStateToProps = state => ({
  game:state.game,
  player1: state.player1,
  player2: state.player2
})
    
export default connect(mapStateToProps,)(GameDetails)
