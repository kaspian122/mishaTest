import React from 'react';

export const renderInput = (props) => {
    const {input, label, type, error, className} = props;
    return (
        <div>
            <label className="form__input-label">{label}</label>
            <div>
                <input
                    {...input}
                    placeholder={label}
                    type={type}
                    className={className}
                />
                {error && <div className="form__error-message">{error}</div>}
            </div>
        </div>
    )
};