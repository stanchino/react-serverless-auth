import React from "react";

import Messages from "./Messages";

export default ({ children, loading, onSubmit, form }) => (
    loading ?
        "Loading..." :
        <form onSubmit={form.handleSubmit(onSubmit)}>
            <Messages error={form.error} />
            {React.Children.map(children, child => React.cloneElement(child, { form: form }))}
        </form>
);