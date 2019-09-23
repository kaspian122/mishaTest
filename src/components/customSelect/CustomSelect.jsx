import './CustomSelect.scss';
import React from 'react';
import PropTypes from 'prop-types';

const CustomSelect = (props) => {
    const {input, label,  error, children, parent} = props;

    const mixClasses = (parentClass, modiff) => {
        return modiff.reduce((acc, item) => acc += item ? `${parentClass}--${item } ` : '', '');
    };

    const className = `custom-input__field ${mixClasses('custom-input__field', [])} ${parent}`;

    return (
        <div className="custom-select">
            <label>{label}</label>
            <select
                className={className}
                {...input}
            >
                {children}
            </select>
            {error && <div className="custom-select__error-message">{error}</div>}
        </div>
    )
};

CustomSelect.propTypes = {
    children: PropTypes.array,
    label: PropTypes.string,
    error: PropTypes.string,
    parent: PropTypes.string,
};

CustomSelect.defaultProps = {
    children: [],
    label: '',
    error: '',
    parent: '',
};

export default CustomSelect;