import React from "react";
import { Route, Redirect } from "react-router";

import { Protected } from "react-serverless-auth";

export default ({ path , to, ...props }) => (
  <Route path={path}>
    <Protected {...props}>
      <Redirect to={to}/>
    </Protected>
  </Route>
);