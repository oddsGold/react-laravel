import React, {useEffect} from 'react';
import {BrowserRouter as Router, Redirect, Route} from "react-router-dom";
import './libs.scss';
import './App.scss';
import Index from "./views/pages/index";
import LoginContainer from "./views/pages/Login/LoginContainer";
import RegisterContainer from "./views/pages/Register/RegisterContainer";
import GuestRoute from "./Helpers/Hoc/GuestRoute";
import AuthRoute from "./Helpers/Hoc/AuthRoute";
import Preloader from "./views/sections/preloader/preloader";
import {connect} from "react-redux";
import {initializedSuccessApp} from "./reducers/app-reducer";
import UsersContainer from "./views/pages/Users/UsersContainer";
import UserEditContainer from "./views/pages/Users/UserEditContainer";


// const UsersContainer = React.lazy(() => import('./components/content/Users/UsersContainer'));

function App(props) {
    useEffect(() => {
        props.initializedSuccessApp();
    }, [])

    if(!props.initialized){
        return <Preloader/>
    }

        return (
        <Router>
            <GuestRoute path="/admin/login" component={LoginContainer}/>
            <GuestRoute path="/admin/register" component={RegisterContainer}/>
            <AuthRoute exact path="/admin" component={Index}/>
            <AuthRoute exact path="/admin/users" component={UsersContainer}/>
            <AuthRoute path="/admin/users/edit/:userId?" component={UserEditContainer}/>
        </Router>
    );
}



let mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

export default connect(mapStateToProps,
    {
        initializedSuccessApp,
    })(App);
