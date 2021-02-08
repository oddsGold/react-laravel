import React from 'react';
import * as serviceWorker from './serviceWorker';
import ReactDOM from "react-dom";
import store from "./reducers/redux-store";
import {Provider} from "react-redux";
import App from "./App";
import cookie from "js-cookie";
import {authApi} from "./api/Api";
import {setUserDataAC} from "./reducers/auth-reducer";
import jwt from "jsonwebtoken";

const jwt_secret = "6GbR4fcmz7YRwEwfgugATC16jf1qxhYi4LuuqeWQ7bi7P9fRPycU2PSBug95uKg8";
let token = cookie.get("token");

if(token) {
    jwt.verify(token, jwt_secret, function(err, decoded) {
        if (err) {
            cookie.remove("token");
            token=null;
        }else {
            if(decoded.iss !== 'http://react.local/api/auth/login'){
                cookie.remove("token");
                token=null;
            }
        }
    });
}

function render() {
    ReactDOM.render(
        // <React.StrictMode>
        //     <Provider store={store}>
        //         <App />
        //     </Provider>
        // </React.StrictMode>,
        <Provider store={store}>
            <App/>
        </Provider>,
        document.getElementById('root')
    )
}

if (token) {
    authApi.getUser(token)
        .then(response => {
            store.dispatch(setUserDataAC(response.data.user));
            render();
        })
} else {
    render()
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
