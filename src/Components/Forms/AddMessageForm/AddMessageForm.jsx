import {Field, Form, Formik} from "formik";
import React from "react";

const AddMessageForm = (props) => {
    return (
        <Formik
            initialValues={{newMessage: ""}}
            onSubmit={(values, {resetForm}) => {
                props.updateNewMessageText(values.newMessage);
                props.addMessage();
                resetForm();
            }}
        >
            {() => (
                <Form>
                    <div className="Dialogs__AddMessage">
                        <div>
                            <Field
                                className="Dialogs__AddMessage_textarea"
                                name={"newMessage"}
                                as={"textarea"}
                                placeholder={"Enter Message"}
                            />
                        </div>
                        <div>
                            <button
                                className="Dialogs__AddMessage_button"
                                type={"submit"}>
                                Send
                            </button>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default AddMessageForm