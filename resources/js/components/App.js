import React from 'react';
import {BrowserRouter as Router, Redirect, Route} from "react-router-dom";
import './libs.scss';
import './App.scss';
import Index from "./views/pages/index";
import LoginContainer from "./views/pages/Login/LoginContainer";
import RegisterContainer from "./views/pages/Register/RegisterContainer";
import GuestRoute from "./Helpers/Hoc/GuestRoute";
import AuthRoute from "./Helpers/Hoc/AuthRoute";


// const UsersContainer = React.lazy(() => import('./components/content/Users/UsersContainer'));

function App(props) {
        return (
        <Router>
            <GuestRoute path="/admin/login" component={LoginContainer}/>
            <GuestRoute path="/admin/register" component={RegisterContainer}/>
            <AuthRoute exact path="/admin" component={Index}/>
        </Router>
    );
}



export default App;
