import React from "react";
import {Form, Formik} from "formik";
import {composeValidators, isRequired, maxLength} from "../Validation";
import {CustomField} from "../FormsBlueprints/FormsBlueprints";

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
                {
                    <Form>
                        <div className="Profile__newPost">
                            <CustomField
                                name={"newPostText"}
                                placeholder={"Write your post..."}
                                className="Profile__newPost__text"
                                component={"textarea"}
                                validate={composeValidators(isRequired, maxLength(500))}
                            />
                        </div>
                        <div className="Profile__newPost__postButton">
                            <button type={"submit"}>
                                Post
                            </button>
                        </div>
                    </Form>
                }
            </Formik>
        </div>
    )
}

export default AddPostForm;