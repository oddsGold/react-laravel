import React from "react";
import Wrapper from "../../Layout/Wrapper";
import RegisterPageReduxForm from "./RegisterPageForm";

function RegisterPage(props) {

    return (
        <div className="login-page">
            <RegisterPageReduxForm onSubmit={props.onSubmit}/>
        </div>
    )
}

export default RegisterPage;
