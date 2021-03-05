import React from "react";
import Multiselect from 'react-widgets/lib/Multiselect'
import DateTimePicker from 'react-widgets/lib/DateTimePicker'
import moment from 'moment'
import momentLocalizer from 'react-widgets-moment';
moment.locale('uk')
momentLocalizer()

import 'react-widgets/dist/css/react-widgets.css'
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

export function FileInput({input: {value: omitValue, onChange, onBlur, ...inputProps}, meta: omitMeta, ...props}) {
    return (
        <input
            onChange={adaptFileEventToValue(onChange)}
            // onBlur={adaptFileEventToValue(onBlur)}
            type="file"
            {...props.input}
            {...props}
        />
    );
};

export function renderMultiselect({input, data, valueField, textField}) {
    return (
        <Multiselect {...input}
                     onBlur={() => input.onBlur()}
                     value={input.value || []} // requires value to be an array
                     data={data}
                     valueField={valueField}
                     textField={textField}
        />
    )
};

export function renderDateTimePicker({input: {onChange, value}, showTime}) {
    return (
        <DateTimePicker
            onChange={onChange}
            format="DD MMM YYYY, HH:mm"
            showTime={true}
            time={true}
            step={1}
            timeFormat="HH:mm"
            value={!value ? null : new Date(value)}
        />
    )
}

