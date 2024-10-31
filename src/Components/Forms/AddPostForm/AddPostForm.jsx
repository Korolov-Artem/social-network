import React from "react";
import {Field, Form, Formik} from "formik";

const AddPostForm = (props) => {
    return (
        <div className="Profile__newPost">
            <Formik
                initialValues={{newPostText: props.newPostText}}
                onSubmit={(values, {resetForm}) => {
                    props.updateNewPostText(values.newPostText);
                    props.addPost();
                    resetForm();
                }}
            >
                {({handleChange, handleSubmit}) => (
                    <Form>
                        <div>
                            <Field name={"newPostText"} type={"text"} as={"textarea"}
                                   placeholder={"Write your post..."}
                                   onChange={(e) => {
                                       handleChange(e);
                                       props.updateNewPostText(e.target.value);
                                   }}
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