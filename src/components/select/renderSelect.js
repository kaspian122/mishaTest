import React from 'react';

export const renderSelect = (props) => {
    const {input, label,  error, children, className} = props;
    return (
        <div>
            <label>{label}</label>
            <div>
                <select
                    className={className}
                    {...input}
                >
                    {children}
                </select>
                {error && <div className="form__error-message">{error}</div>}
            </div>
        </div>
    )
};