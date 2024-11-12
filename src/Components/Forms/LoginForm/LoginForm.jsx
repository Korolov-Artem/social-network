import "./LoginForm.css"
import {Field, Form, Formik} from "formik";
import {CustomField} from "../FormsBlueprints/FormsBlueprints";
import {composeValidators, isRequired} from "../Validation";
import {connect} from "react-redux";
import {login, logout} from "../../../Redux/authReducer";
import {Navigate} from "react-router-dom";

const LoginForm = (props) => {
    if (props.isAuth) {
        return <Navigate to="/profile"/>
    }
    return (
        <div className="Login">
            <h1>LoginForm</h1>
            <Formik
                initialValues={{email: '', password: '', remember: false}}
                onSubmit={(values) => {
                    props.login(values.email, values.password, values.remember);
                }}
            >
                {(isValid) => (
                    <Form>
                        <div>
                            <CustomField
                                name={"email"}
                                type={"text"}
                                placeholder={"E-mail"}
                                component={"input"}
                                validate={composeValidators(isRequired)}
                            />
                        </div>
                        <div>
                            <CustomField
                                name={"password"}
                                type={"password"}
                                placeholder={"Password"}
                                component={"input"}
                                validate={composeValidators(isRequired)}
                            />
                        </div>
                        <div>
                            <Field name={"remember"} type={"checkbox"} placeholder={"Remember Me"}/>
                            <label htmlFor={"remember"}>Remember Me</label>
                        </div>
                        {isValid && (
                            <div>
                                <button type="submit">Login</button>
                            </div>
                        )}
                    </Form>
                )}
            </Formik>
        </div>
    )
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {
    login,
    logout
})(LoginForm);