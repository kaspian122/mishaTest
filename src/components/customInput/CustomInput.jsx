import './CustomInput.scss';
import React from 'react';
import PropTypes from 'prop-types';

const CustomInput = (props) => {
    const {
        input,
        label,
        type,
        error,
        parent,
        auth,
        placeHolder,
    } = props;

    const mixClasses = (parentClass, modiff) => {
        return modiff.reduce((acc, item) => acc += item ? `${parentClass}--${item } ` : '', '');
    };

    const className = `custom-input__field ${mixClasses('custom-input__field', [auth && 'auth'])} ${parent}`;

    return (
        <span className="custom-input">
            <label className="custom-input__input-label">{label}</label>
                <input
                    {...input}
                    placeholder={placeHolder}
                    type={type}
                    className={className}
                />
                {error && <div className="custom-input__error-message">{error}</div>}
        </span>
    )
};

CustomInput.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    error: PropTypes.string,
    parent: PropTypes.string,
    onChange: PropTypes.func,
    input: PropTypes.object,
    placeHolder: PropTypes.string,
};

CustomInput.defaultProps = {
    label: '',
    type: "text",
    error: '',
    parent: '',
    placeHolder: '',
    input: {},
};

export default CustomInput;