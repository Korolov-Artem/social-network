import {Field, Form, Formik} from "formik";
import {CustomField} from "../../Forms/FormsBlueprints/FormsBlueprints";
import {composeValidators, maxLength} from "../../Forms/Validation";

const ProfileDataForm = (props) => {
    if (props.profile) {
        return (
            <div className="Profile__data__form">
                <h1>Update Profile</h1>
                <Formik
                    initialValues={{
                        fullName: props.profile.fullName,
                        aboutMe: props.profile.aboutMe,
                        lookingForAJob: props.profile.lookingForAJob,
                        lookingForAJobDescription: props.profile.lookingForAJobDescription,
                        contacts: props.profile.contacts
                    }}
                    onSubmit={async (values, {setStatus, resetForm, setSubmitting}) => {
                        let formValues = {
                            fullName: values.fullName,
                            aboutMe: values.aboutMe || null,
                            lookingForAJob: values.lookingForAJob,
                            lookingForAJobDescription: values.lookingForAJobDescription,
                            contacts: values.contacts
                        }
                        try {
                            const response = await props.updateProfileDescription(formValues, setStatus);
                            if (response?.data?.resultCode === 0) {
                                resetForm({values});
                                props.setEditMode(false);
                            }
                        } finally {
                            setSubmitting(false);
                        }
                    }}
                >
                    {({status}) => (
                        <Form>
                            {status?.errors && (
                                <div>
                                    {status.errors.map((error, index) => <p key={index}>{error}</p>)}
                                </div>
                            )}
                            <div>
                                <label>My Name</label>
                                <CustomField
                                    name={"fullName"}
                                    type={"text"}
                                    placeholder={"My Name is"}
                                    component={"input"}
                                    validate={composeValidators(maxLength(30))}
                                />
                            </div>
                            <div>
                                <label>About Me</label>
                                <CustomField
                                    name={"aboutMe"}
                                    type={"text"}
                                    placeholder={"The story of my life..."}
                                    component={"textarea"}
                                    validate={composeValidators(maxLength(600))}
                                />
                            </div>
                            <div>
                                <label>Looking for a Job</label>
                                <Field
                                    name={"lookingForAJob"}
                                    type={"checkbox"}
                                    placeholder={"I am looking for a job"}
                                />
                            </div>
                            <div>
                                <label>My Skills</label>
                                <CustomField
                                    name={"lookingForAJobDescription"}
                                    type={"text"}
                                    placeholder={"You have some skills, right?"}
                                    component={"textarea"}
                                    validate={composeValidators(maxLength(600))}
                                />
                            </div>
                            <div>
                                <label>My Github</label>
                                <CustomField
                                    name={"contacts.github"}
                                    type={"text"}
                                    placeholder={"Your link, sir"}
                                    component={"input"}
                                    validate={composeValidators(maxLength(100))}
                                />
                            </div>
                            <div>
                                <button type="submit">Save Changes</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        )
    }
}

export default ProfileDataForm;