import React from 'react';

export const renderSelect = ({input, label,  error, children}) => (
    <div>
        <label>{label}</label>
        <div>
            <select
                {...input}
                style={error ? {border:'1px solid red', width: "160px"} : {border: "none", width: "160px"}}
            >
                {children}
            </select>
            {error && <div style={{color: 'red'}}>{error}</div>}
        </div>
    </div>
);