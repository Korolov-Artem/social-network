import {Field, Form, Formik} from "formik";
import React from "react";

const AddMessageForm = (props) => {
    return (
        <Formik
            initialValues={{newDialogsText: props.newDialogsText}}
            onSubmit={(values, {resetForm}) => {
                props.addMessage(values.newDialogsText);
                resetForm();
            }}
        >
            {({handleChange}) => (
                <Form>
                    <div className="Dialogs__AddMessage">
                        <div>
                            <Field
                                className="Dialogs__AddMessage_textarea"
                                name={"newDialogsText"}
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