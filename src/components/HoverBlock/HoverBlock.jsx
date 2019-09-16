import React from 'react';
import './style.scss';

class HoverBlock extends  React.Component {
    blockRef = React.createRef();
    state ={hoverSide: 0};
    handleMouseEnter = (e) => {
        const mouseCor = {x: e.pageX, y: e.pageY};
        const blockCor = {
            topLeft: {
                x: this.blockRef.offsetLeft,
                y: this.blockRef.offsetTop
            },
            bottomLeft: {
                x: this.blockRef.offsetLeft,
                y: this.blockRef.offsetTop + 200
            },
            topRight: {
                x: this.blockRef.offsetLeft + 200,
                y: this.blockRef.offsetTop
            },
            bottomRight: {
                x: this.blockRef.offsetLeft + 200,
                y: this.blockRef.offsetTop + 200
            },

        };
        if(mouseCor.x <= blockCor.topRight.x && mouseCor.x >= blockCor.topLeft.x ) {
            console.log('top');
        }
        if(mouseCor.y >= blockCor.topLeft.y && mouseCor.y <= blockCor.bottomLeft.y ) {
            console.log('left');
        }
    }

    handleMouseLeave = () => {
       this.setState({hoverSide: 0});
    }

    render() {
        return(
            <div className="hoverableBlock" ref={this.blockRef} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}/>
        )
    }
}

export default  HoverBlock;