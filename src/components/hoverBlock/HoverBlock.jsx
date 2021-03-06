import './HoverBlock.scss';
import React, {useState} from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const HoverBlock = (props) => {
    const [hoverClass, setHoverClass] = useState('');
    const {note, id} = props;
    console.log(note);

    const calculateDirection = (e, item) => {
        const itemWidth = item.offsetWidth;
        const itemHeight = item.offsetHeight;
        const itemPosition = calculatePosition(item);
        const x = (e.pageX - itemPosition.x - itemWidth / 2)*( itemWidth> itemHeight ? itemHeight/ itemWidth : 1 );
        const y = (e.pageY - itemPosition.y - itemHeight / 2) * (itemHeight> itemWidth ? itemWidth / itemHeight : 1);
        const direction = Math.round(Math.atan2(y, x)/ 1.57079633 + 5) % 4;
        switch(direction) {
            case 0:
                return 'top';
            case 1:
                return 'right';
            case 2:
                return 'bottom';
            case 3:
                return "left";
            default:
                return '';
        }
    };

    const calculatePosition = (el) => {
        let xCor = 0, yCor = 0;
        while(el) {
            xCor += el.offsetLeft + el.clientLeft;
            yCor += el.offsetTop + el.clientTop;
            el= el.offsetParent;
        }
        return {x: xCor, y: yCor};
    };

   const  handleMouseEnter = (e) => {
       const currentItem = e.currentTarget;
       const direction = calculateDirection(e, currentItem);
        setHoverClass('enter-' + direction);
    };

    const handleMouseLeave = (e) => {
        const currentItem = e.currentTarget;
        const direction = calculateDirection(e, currentItem);
        setHoverClass('leave-' + direction);
    };

    return(
        <div
            className="hover-block"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="hover-block__content">
                <span className="hover-block__title">{id}</span>
                <div className="hover-block__main-block">
                    <span>
                        type: {note.type}
                    </span>
                    <span>name: {note.auth} </span>
                </div>
            </div>
            <div className={`hover-block__moving-block hover-block__moving-block--${hoverClass}`} >
                <Link to={`/application/${id}`}>ПЕРЕЙТИ K ЗАЯВКЕ</Link>
            </div>
        </div>
    )
};

HoverBlock.propTypes = {
    id: PropTypes.number.isRequired,
    note: PropTypes.object.isRequired,
};

export default  HoverBlock;