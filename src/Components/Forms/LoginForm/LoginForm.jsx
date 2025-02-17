import "./LoginForm.css";
import { Field, Form, Formik } from "formik";
import { CustomField } from "../FormsBlueprints/FormsBlueprints";
import { composeValidators, isRequired } from "../Validation";
import { connect } from "react-redux";
import { login } from "../../../Redux/authReducer";
import { Navigate } from "react-router-dom";

const LoginForm = ({ isAuth, login, captchaUrl }) => {
  if (isAuth) {
    return <Navigate to="/profile" />;
  }
  return (
    <div className="Login">
      <h1>LoginForm</h1>
      <Formik
        initialValues={{ email: "", password: "", remember: false }}
        onSubmit={(values, submitProps) => {
          login(
            values.email,
            values.password,
            values.remember,
            values.captcha,
            submitProps.setStatus
          );
          submitProps.resetForm();
        }}
      >
        {({ status }) => (
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
              {captchaUrl && <img src={captchaUrl} alt={""} />}
              {captchaUrl && (
                <CustomField
                  name={"captchaAnswer"}
                  type={"text"}
                  placeholder={"Enter symbols from the image"}
                  component={"input"}
                  validate={composeValidators(isRequired)}
                />
              )}
            </div>
            <div>
              <Field
                name={"remember"}
                type={"checkbox"}
                placeholder={"Remember Me"}
              />
              <label htmlFor={"remember"}>Remember Me</label>
            </div>
            <div>
              <button type="submit">Login</button>
            </div>
            {status && status.errors && (
              <div className="api-error">
                {status.errors.map((item, index) => (
                  <div key={index}>{item}</div>
                ))}
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl,
});

export default connect(mapStateToProps, {
  login,
})(LoginForm);
