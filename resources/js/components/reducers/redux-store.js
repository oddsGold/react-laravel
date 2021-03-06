import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form';
import appReducer from "./app-reducer";
import navbarReducer from "./navbar-reducer";
import authReducer from "./auth-reducer";
import usersReducer from "./user-reduser";
import newsReducer from "./news-reducer";
import categoryReducer from "./category-reducer";

let reducers = combineReducers({
    navbar: navbarReducer,
    app: appReducer,
    form: formReducer,
    auth: authReducer,
    users: usersReducer,
    news: newsReducer,
    category: categoryReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,  composeEnhancers(applyMiddleware(thunkMiddleware)
));

// let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
