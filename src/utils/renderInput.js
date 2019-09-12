import React from 'react';

export const renderInput = ({input, label, type, error, meta:{touched}}) => {console.log('error - ', error);
return (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} style={error ? {border:'1px solid red'} : {border: "none"}}/>
            {error && <span style={{color: 'red'}}>{error}</span>}
        </div>
    </div>
)
}