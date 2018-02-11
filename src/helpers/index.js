import React from "react";

export const elementOrCreate = ({ component, ...props }) => (
    React.isValidElement(component) ? component : React.createElement(component, {...props})
);

export const componentOrNull = (component, props = null) => (
    component ? elementOrCreate({ component, ...props }) : null
);