import {Form, Formik} from "formik";
import React from "react";
import {CustomField} from "../FormsBlueprints/FormsBlueprints";
import {composeValidators, isRequired, maxLength} from "../Validation";

const AddMessageForm = (props) => {
    return (
        <Formik
            initialValues={{newDialogsText: props.newDialogsText}}
            onSubmit={(values, {resetForm}) => {
                props.addMessage(values.newDialogsText);
                resetForm();
            }}
        >
            {(meta) => (
                <Form>
                    <div className="Dialogs__AddMessage">
                        <div>
                            <CustomField
                                name={"newDialogsText"}
                                placeholder={"Enter Message"}
                                className="Dialogs__AddMessage_textarea"
                                component={"textarea"}
                                validate={composeValidators(isRequired, maxLength(300))}
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