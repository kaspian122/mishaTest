import React from 'react';

export const renderInput = ({input, label, type, error}) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} style={error ? {border:'1px solid red'} : {border: "none"}}/>
            {error && <div style={{color: 'red'}}>{error}</div>}
        </div>
    </div>
);