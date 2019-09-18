import React from 'react';
import './style.scss';

class HoverBlock extends  React.Component {
    state ={
        enterDirection: '',
        leaveDirection: '',
    };
    blockRef = React.createRef();
    hoverRef = React.createRef();

    calculateDirection = (e) => {
        const mouseCor = {x: e.pageX, y: e.pageY};
        const blockCor = {
            startPos: {
                x: this.blockRef.current.offsetLeft,
                y: this.blockRef.current.offsetTop
            },
            endPos: {
                x: this.blockRef.current.offsetLeft + 200,
                y: this.blockRef.current.offsetTop + 200
            }
        };
        if((mouseCor.x <= blockCor.endPos.x && mouseCor.x >= blockCor.startPos.x) && mouseCor.y <= blockCor.startPos.y + 20 ) {
            return 'top';
        }
        else if((mouseCor.x <= blockCor.endPos.x && mouseCor.x >= blockCor.startPos.x) && mouseCor.y >= blockCor.endPos.y - 20) {
            return 'bottom';
        }
        else if (( mouseCor.y >= blockCor.startPos.y && mouseCor.y <= blockCor.endPos.y ) && mouseCor.x <= blockCor.startPos.x + 20) {
            return 'left';
        }
        else if (( mouseCor.y >= blockCor.startPos.y && mouseCor.y <= blockCor.endPos.y ) && mouseCor.x <= blockCor.endPos.x) {
            return 'right';
        }
    }

    handleMouseEnter = (e) => {
        this.hoverRef.current.classList.add(this.calculateDirection(e));
        this.setState({enterDirection: this.calculateDirection(e)});
    };

    handleMouseLeave = (e) => {
        this.hoverRef.current.classList.remove(this.state.enterDirection);
    };

    render() {
        const {enterDirection, leaveDirection} = this.state;
        return(
            <div
                ref={this.blockRef}
                className="hoverableBlock"
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
            >
                <div className="hoverBlock" ref={this.hoverRef}/>
            </div>
        )
    }
}

export default  HoverBlock;