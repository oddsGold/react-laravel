import React from "react";
import { Field, reduxForm } from 'redux-form'
import {Input} from "../../../Helpers/FormsControls/Forms";
import {required} from "../../../Helpers/Validation/validation";

function RegisterPageForm({handleSubmit, error}){
    return(
        <div className="login-form">
            <form onSubmit={handleSubmit} className="log-in">
                <h4>We are <span>Linkos</span></h4>
                <p>Welcome back! Register your new account:</p>

                {error
                    ? Object.keys(error).map((item, key) => <li key={key} className="list-error">{error[item]}</li>)
                    : ""
                }

                <div className="floating-label">
                    <label htmlFor="name">Name:</label>
                    <Field type="text" placeholder={"Name"} name={"name"} component={Input} validate={[required]}/>
                </div>
                <div className="floating-label">
                    <label htmlFor="email">Email:</label>
                    <Field type="text" placeholder={"email"} name={"email"} component={Input} validate={[required]}/>
                </div>
                <div className="floating-label">
                    <label htmlFor="password">Password:</label>
                    <Field type="password" placeholder={"Password"} name={"password"} component={Input} validate={[required]}/>
                </div>
                <div className="floating-label">
                    <label htmlFor="password_conformation">Conform Your Password:</label>
                    <Field type="password" placeholder={"Conform Your Password"} name={"password_conformation"} component={Input} validate={[required]}/>
                </div>
                <div>
                    <button>Register</button>
                </div>
            </form>
        </div>
    )
}

const RegisterPageReduxForm = reduxForm({
    form: 'register'
})(RegisterPageForm)

export default RegisterPageReduxForm;
