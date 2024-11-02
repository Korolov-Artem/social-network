import "./LoginForm.css"
import {Field, Form, Formik} from "formik";

const LoginForm = () => {
    return (
        <div className="Login">
            <h1>LoginForm</h1>
            <Formik
                initialValues={{email: '', password: '', remember: false}}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {() => (
                    <Form>
                        <div>
                            <Field name={"email"} type={"text"} placeholder={"E-mail"}/>
                        </div>
                        <div>
                            <Field name={"password"} type={"text"} placeholder={"Password"}/>
                        </div>
                        <div>
                            <Field name={"remember"} type={"checkbox"} placeholder={"Remember Me"}/>
                            <label htmlFor={"remember"}>Remember Me</label>
                        </div>
                        <div>
                            <button type="submit">Login</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default LoginForm;