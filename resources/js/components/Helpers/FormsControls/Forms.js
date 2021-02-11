import React from "react";
import "./Forms.css"

export function Textarea({input, meta, ...props}) {
    const hasError = meta.touched && meta.error;

    return(
        <>
            <textarea className={hasError ? "error" : ""} {...props} {...input} />
            { hasError && <span className="list-error">{meta.error}</span> }
        </>
    )
}

export function Input({input, value, meta, ...props}) {
    const hasError = meta.touched && meta.error;

    return(
        <>
            <input className={hasError ? "error" : ""} {...props} {...input} />
            { hasError && <span className="list-error">{meta.error}</span> }
        </>
    )
}

