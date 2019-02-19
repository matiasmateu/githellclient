import React ,{ Component } from 'react'
import {Stage,Rect,Layer,} from 'react-konva'

 class GameDetails extends Component{

    

    componentDidMount(){
        this.props.draw()
    }

    render(){
        return(<div>
            <Stage width={window.innerWidth} height={window.innerHeight}>
              <Layer>
                <Rect
                  x={this.props.x}
                  y={50}
                  width={50}
                  height={50}
                  fill={'green'}
                />
              </Layer>
            </Stage>
            </div>)
    } 
}

export default GameDetails