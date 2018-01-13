import React from "react";

export default ({ input, label, placeholder, type, meta: { touched, error }, ...props }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} type={type} placeholder={placeholder} { ...props} />
            {touched && error && <span>{error}</span>}
        </div>
    </div>
);