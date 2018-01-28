import React from "react";

export const elementOrCreate = ({ component, ...props }) => (
    React.isValidElement(component) ? component : React.createElement(component, {...props})
);

export const componentOrNull = component => (
    component ? React.createElement(component) : null
);