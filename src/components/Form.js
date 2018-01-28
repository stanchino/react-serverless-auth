import React from "react";

import Messages from "./Messages";

export default ({ children, loading, onSubmit, form, className }) => (
    loading ?
        "Loading..." :
        <form onSubmit={form.handleSubmit(onSubmit)} className={className}>
            <Messages error={form.error} />
            {React.Children.map(children, child => React.cloneElement(child, { form: form }))}
        </form>
);