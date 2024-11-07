import React from "react";
import "./FormsBlueprints.css"
import {Field} from "formik";

export const Textarea = ({error, ...props}) => {
    return (
        <div className={`Forms__FormsBlueprints__Textarea${error ? "__false" : ""}`}>
            <textarea {...props}/>
            {error && <div className="Forms__FormsBlueprints__Textarea__error">{error}</div>}
        </div>
    )
}

export const CustomField = ({component: Component, ...props}) => (
    <Field {...props}>
        {({field, meta}) => (
            <Component
                {...field}
                {...props}
                error={meta.touched && meta.error ? meta.error : ""}
            />
        )}
    </Field>
)
