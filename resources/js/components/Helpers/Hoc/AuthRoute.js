import React, {useState} from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const AuthRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                rest.loggedIn ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/admin/login"
                        }}
                    />
                )
            }
        />
    );
};

let mapStateToProps = (state) => {
    return{
        loggedIn: state.auth.loggedIn
    }
}


export default connect(mapStateToProps)(AuthRoute);
