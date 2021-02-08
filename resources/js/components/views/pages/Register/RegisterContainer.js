import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import RegisterPage from "./RegisterPage";
import {register} from "../../../reducers/auth-reducer";
import {Redirect} from "react-router-dom";

function RegisterContainer(props) {
    const onSubmit = (formData) => {
        const {name, email, password, password_confirmation} = formData;
        props.register(name, email, password, password_confirmation);
    }

    if (props.newRegistration) {
        return <Redirect to={"/admin/login"}/>

    }
    return (
        <RegisterPage onSubmit={onSubmit}/>
    );
}


let mapStateToProps = (state) => {
    return {
        newRegistration: state.auth.newRegistration,
    }
}

export default compose(
    connect(mapStateToProps,
        {
            register
        })
)(RegisterContainer);
