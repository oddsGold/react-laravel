import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {connect} from "react-redux";
import './libs.scss';
import './App.scss';
import Index from "./views/pages/index";
import Preloader from "./views/sections/preloader/preloader";
import {initializedSuccessApp} from "./reducers/app-reducer";
import LoginContainer from "./views/pages/Login/LoginContainer";


// const UsersContainer = React.lazy(() => import('./components/content/Users/UsersContainer'));

function App(props) {

    useEffect(() => {
        props.initializedSuccessApp();
    })

    if(!props.initialized){
        return <Preloader/>
    }
    return (
        <Router>
            <Route exact path="/admin" component={Index}/>
            <Route path="/admin/login" component={LoginContainer}/>
        </Router>
    );
}

let mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized,
    }
}

export default connect(mapStateToProps,
    {
        initializedSuccessApp,
    })(App);
