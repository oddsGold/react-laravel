import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import LoginPage from "./LoginPage";
import {login} from "../../../reducers/auth-reducer";

function LoginContainer(props) {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password);
    }

    return (
        <LoginPage onSubmit={onSubmit}/>
    )
}

let mapStateToProps = (state) => {
    return {
        loggedIn: state.auth.loggedIn
    }
}

export default compose(
    connect(mapStateToProps,
        {
            login,
        })
)(LoginContainer);
