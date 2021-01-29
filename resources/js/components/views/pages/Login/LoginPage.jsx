import React from "react";
import Wrapper from "../../Layout/Wrapper";
import LoginPageReduxForm from "./LoginPageForm";

function LoginPage(props) {

    return (
        <Wrapper>
            <h1>Login Form</h1>
            <LoginPageReduxForm onSubmit={props.onSubmit}/>
        </Wrapper>
    )
}

export default LoginPage;
