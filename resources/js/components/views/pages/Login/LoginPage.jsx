import React from "react";
import Wrapper from "../../Layout/Wrapper";
import LoginPageReduxForm from "./LoginPageForm";

function LoginPage(props) {

    return (
        <div className="login-page">
            <LoginPageReduxForm onSubmit={props.onSubmit}/>
        </div>
    )
}

export default LoginPage;
