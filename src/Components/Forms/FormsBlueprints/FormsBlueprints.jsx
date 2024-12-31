import React from "react";
import "./FormsBlueprints.css"
import {Field} from "formik";

export const CustomField = ({component: Component, validate, ...props}) => (
    <Field {...props} validate={validate}>
        {({field, meta}) => (
            <div className={`Forms__FormsBlueprints__Textarea${meta.error && meta.touched ? "__false" : ""}`}>
                <Component {...props} {...field}/>
                {meta.error && meta.touched &&
                    <div className="Forms__FormsBlueprints__Textarea__error">{meta.error}</div>}
            </div>
        )}
    </Field>
)
