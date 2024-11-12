import React from "react";
import "./FormsBlueprints.css"
import {Field} from "formik";

// export const CustomFormComponent = ({error, component, ...props}) => {
//     return (
//         <div className={`Forms__FormsBlueprints__Textarea${error ? "__false" : ""}`}>
//             <textarea {...props}/>
//             {error && <div className="Forms__FormsBlueprints__Textarea__error">{error}</div>}
//         </div>
//     )
// }

export const CustomField = ({component: Component, ...props}) => (
    <Field {...props}>
        {({field, meta}) => (
            <div className={`Forms__FormsBlueprints__Textarea${meta.error && meta.touched ? "__false" : ""}`}>
                <Component {...props} {...field}/>
                {meta.error && meta.touched &&
                    <div className="Forms__FormsBlueprints__Textarea__error">{meta.error}</div>}
            </div>
        )}
    </Field>
)