import React from "react";
import { Field, reduxForm } from 'redux-form'
import {Input} from "../../../Helpers/FormsControls/Forms";
import {required} from "../../../Helpers/Validation/validation";

function LoginPageForm({handleSubmit, error}){
    return(
        <div className="login-form">
            <form onSubmit={handleSubmit}>
                <div>
                    <Field type="text" placeholder={"Login"} name={"email"} component={Input} validate={[required]}/>
                </div>
                <div>
                    <Field type="text" placeholder={"Password"} name={"password"} component={Input} validate={[required]}/>
                </div>
                {error
                    ? <div className="list-error">{error}</div>
                    : ""
                }
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
