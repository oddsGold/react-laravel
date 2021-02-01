import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsForRedicrect = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const withAuthRedirect = (Component) => {
    function RedirectComponent (props) {
        if (!props.isAuth) return <Redirect to={"/admin/login"}/>

        return <Component {...props} />
    }
    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedicrect)(RedirectComponent);

    return ConnectedAuthRedirectComponent;
}
