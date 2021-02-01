import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const GuestRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                !rest.loggedIn ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/admin"
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

export default connect(mapStateToProps)(GuestRoute);
