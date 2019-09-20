import React from 'react';

export const renderInput = (props) => {
    const {input, label, type, error} = props;
    return (
        <div>
            <label>{label}</label>
            <div>
                <input
                    {...input}
                    placeholder={label}
                    type={type}
                    style={error ? {border: "1px solid red", width: "165px"} : {border: "none", width: "160px"}}
                />
                {error && <div style={{color: 'red'}}>{error}</div>}
            </div>
        </div>
    )
};