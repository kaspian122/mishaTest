import React from 'react';

export const renderSelect = ({input, label, type, error, children}) => (
    <div>
        <label>{label}</label>
        <div>
            <select {...input} type={type} style={error ? {border:'1px solid red'} : {border: "none"}}>
                {children}
            </select>
            {error && <div style={{color: 'red'}}>{error}</div>}
        </div>
    </div>
);