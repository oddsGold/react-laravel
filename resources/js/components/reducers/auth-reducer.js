import {stopSubmit} from "redux-form";
import {authApi} from "../api/Api";
import cookie from 'js-cookie';
import {menusItem} from "./navbar-reducer";

const SET_USER_DATA = 'SET-USER-DATA';
const SET_NEW_USER = 'SET_NEW_USER';
const SET_LOGOUT_USER = 'SET_LOGOUT_USER';


let initialState = {
    auth: {
        loggedIn: false,
        user: {}
    },
    newRegistration: false //метка для redirect(а) нового пользователя после регистрации
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                loggedIn: true,
                user: action.payload
            }
        case SET_LOGOUT_USER:
            return {
                ...state,
                loggedIn: false,
                user: {}
            }
        case SET_NEW_USER:
            return {
                ...state,
                newRegistration: action.newRegistration
            }
        default:
            return state;
    }
}

export const setUserDataAC = (user) => {
    return {
        type: SET_USER_DATA,
        payload: user
    }
} //login user
export const setLogoutUser = () => {
    return {
        type: SET_LOGOUT_USER
    }
} //logout user
export const setNewUserAC = (newRegistration) => {
    return {
        type: SET_NEW_USER,
        newRegistration: newRegistration
    }
} //create new user

export const getCurrentUserTC = () => {
    return async (dispatch) => {
        const token = cookie.get("token");
        let response = await authApi.getUser(token);

        if (response.errors) {
            dispatch(stopSubmit("login"));
        }else {
            dispatch(setUserDataAC(response.data));
        }
    }
}


export const login = (email, password) => {
    return async (dispatch) => {
        let data = await authApi.authLogin(email, password);

        if (data.errors) {
            dispatch(stopSubmit("login", {_error: data.errors}));
        } else {
            let date = new Date();
            date.setTime(date.getTime() + (180 * 60 * 1000)); //минуты - секунды - милисекунды
            cookie.set("token", data.access_token, {expires: date});

            dispatch(getCurrentUserTC())
        }
    }
} //login user

export const logout = () => {
    return (dispatch) => {
        cookie.remove("token");
        dispatch(setLogoutUser());
    }
} //logout user

export const register = (name, email, password, password_confirmation) => {
    return async (dispatch) => {
        const registerData = {name, email, password, password_confirmation};

        let data = await authApi.authRegister(registerData);

        if (data.errors) {
            dispatch(stopSubmit("register", {_error: data.errors}));
        } else {
            dispatch(setNewUserAC(true))
        }
    }
} //create new user & redirect to login page

export default authReducer;
