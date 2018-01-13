import React from "react";

import Message from "./Message";

export default ({ flash: { error, notice } }) => (
    <div className={"flash"}>
        <Message message={error} style={{ color: "red" }} />
        <Message message={notice} style={{ color: "green" }} />
    </div>
);