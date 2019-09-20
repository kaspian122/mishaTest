import React from 'react';

export const renderSelect = (props) => {
    const {input, label,  error, children} = props;
    return (
        <div>
            <label>{label}</label>
            <div>
                <select
                    {...input}
                    style={error ? {border: '1px solid red', width: "160px"} : {border: "none", width: "160px"}}
                >
                    {children}
                </select>
                {error && <div style={{color: 'red'}}>{error}</div>}
            </div>
        </div>
    )
};