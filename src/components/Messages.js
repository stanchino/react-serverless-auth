import React from "react";

import Message from "./Message";
import Flash from "../containers/Flash";

export default ({ error }) => (
    <div className={"messages"}>
        {!error && <Flash />}
        <Message message={error} style={{ color: "red" }} />
    </div>
);