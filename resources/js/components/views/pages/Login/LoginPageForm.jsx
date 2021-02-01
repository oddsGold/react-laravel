import React from "react";
import {Field, reduxForm} from 'redux-form'
import {Input} from "../../../Helpers/FormsControls/Forms";
import {required} from "../../../Helpers/Validation/validation";

function LoginPageForm({handleSubmit, error}) {
    return (
        <div className="login-form">
            <form onSubmit={handleSubmit} className="log-in">
                <h4>We are <span>Linkos</span></h4>
                <p>Welcome back! Log in to your account:</p>

                {error
                    ? Object.keys(error).map((item, key) => <li key={key} className="list-error">{error[item]}</li>)
                    : ""
                }

                <div className="floating-label">
                    <label htmlFor="email">Email:</label>
                    <Field type="text" placeholder={"Login"} name={"email"} component={Input} validate={[required]}/>
                </div>
                <div className="floating-label">
                    <label htmlFor="password">Password:</label>
                    <Field type="text" placeholder={"Password"} name={"password"} component={Input} validate={[required]} />
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

const LoginPageReduxForm = reduxForm({
    form: 'login'
})(LoginPageForm)

export default LoginPageReduxForm;
