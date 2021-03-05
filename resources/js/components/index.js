import React from 'react';
import * as serviceWorker from './serviceWorker';
import ReactDOM from "react-dom";
import store from "./reducers/redux-store";
import {Provider} from "react-redux";
import App from "./App";

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

render()


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
