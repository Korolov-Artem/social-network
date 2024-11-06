import React from "react";
import {Field, Form, Formik} from "formik";
import {composeValidators, isRequired, maxLength} from "../Validation";
import {Textarea} from "../FormsBlueprints/FormsBlueprints";

const AddPostForm = (props) => {
    return (
        <div>
            <Formik
                initialValues={{newPostText: props.newPostText}}
                onSubmit={(values, {resetForm}) => {
                    props.addPost(values.newPostText);
                    resetForm();
                }}
            >
                {({handleChange, errors, touched}) => (
                    <Form>
                        <div className="Profile__newPost">
                            <Field name={"newPostText"} type={"text"} as={Textarea}
                                   placeholder={"Write your post..."}
                                   className="Profile__newPost__text"
                                   validate={composeValidators(isRequired, maxLength(500))}/>
                            {errors.newPostText && touched.newPostText &&
                                <div>{errors.newPostText}</div>}
                        </div>
                        <div className="Profile__newPost__postButton">
                            <button type={"submit"}>
                                Post
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default AddPostForm;