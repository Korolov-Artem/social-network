import React from "react";
import {Field, Form, Formik} from "formik";

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
                {({handleChange}) => (
                    <Form>
                        <div className="Profile__newPost">
                            <Field name={"newPostText"} type={"text"} as={"textarea"}
                                   placeholder={"Write your post..."}
                                   className="Profile__newPost__text"/>
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