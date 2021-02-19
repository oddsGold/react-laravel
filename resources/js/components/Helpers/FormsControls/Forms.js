import React from "react";
import "./Forms.css"

export function Textarea({input, meta, ...props}) {
    const hasError = meta.touched && meta.error;

    return (
        <>
            <textarea className={hasError ? "error" : ""} {...props} {...input} />
            {hasError && <span className="list-error">{meta.error}</span>}
        </>
    )
}

export function Input({input, value, meta, ...props}) {
    const hasError = meta.touched && meta.error;

    return (
        <>
            <input className={hasError ? "error" : ""} {...props} {...input} />
            {hasError && <span className="list-error">{meta.error}</span>}
        </>
    )
}

const adaptFileEventToValue = (delegate) => (e) => {
    delegate(e.target.files[0])
};

export function FileInput({input: {value: omitValue, onChange, onBlur, ...inputProps},meta: omitMeta,...props}) {
    return (
        <input
            onChange={adaptFileEventToValue(onChange)}
            onBlur={adaptFileEventToValue(onBlur)}
            type="file"
            {...props.input}
            {...props}
        />
    );
};

