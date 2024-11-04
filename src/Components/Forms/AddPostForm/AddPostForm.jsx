import React from "react";
import {Field, Form, Formik} from "formik";

let validatePost = (value) => {
    let error;
    if (!value) {
        error = "Required field";
    }
    return error
};

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
                            <Field name={"newPostText"} type={"text"} as={"textarea"}
                                   placeholder={"Write your post..."}
                                   className="Profile__newPost__text"
                                   validate={validatePost}/>
                            {errors.newPostText && touched.newPostText &&
                                <div className="Profile__newPost__text__error">
                                    {errors.newPostText}</div>}
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