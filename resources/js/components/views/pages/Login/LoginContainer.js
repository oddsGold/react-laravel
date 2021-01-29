import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import LoginPage from "./LoginPage";
import {login} from "../../../reducers/auth-reducer";

function LoginContainer(props) {
    const onSubmit = (formData) => {
        const data = {
            email:formData.email,
            password:formData.password
        }
        console.log(data)
        props.login(data);
    }


    return (
        <LoginPage onSubmit={onSubmit}/>
    )
}

// export default LoginContainer;

// let mapStateToProps = (state) => {
//     return {
//         isAuth: state.auth.isAuth,
//     }
// }

export default compose(
    connect(null,
        {
            login
        })
)(LoginContainer);
