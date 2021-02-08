import React from "react";
import RegisterPageReduxForm from "./RegisterPageForm";

function RegisterPage(props) {

    return (
        <div className="login-page">
            <RegisterPageReduxForm onSubmit={props.onSubmit}/>
        </div>
    )
}

export default RegisterPage;
