import './Button.scss';
import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
    const {
        text,
        onClick,
        parent,
        smallSize,
    } = props;

    const mixClasses = (parentClass, modiff) => {
        return modiff.reduce((acc, item) => acc += item ? `${parentClass}--${item } ` : '', '');
    };

    const className = `button ${mixClasses('button', [smallSize && 'small'])} ${parent}`;

    return (
        <button
            onClick={onClick}
            className={className}
        >
            {text}
        </button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string,
    parent: PropTypes.string,
    smallSize: PropTypes.bool,
};

Button.defaultProps = {
    onClick: () => {},
    text: 'Button',
    parent: '',
    smallSize: false,
};

export default Button;