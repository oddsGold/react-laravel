import {stopSubmit} from "redux-form";
import {authApi} from "../api/Api";
import cookie from 'js-cookie';

const SET_USER_DATA = 'SET-USER-DATA';
const SET_NEW_USER = 'SET_NEW_USER';


let initialState = {
    auth: {
        loggedIn: false,
        user: {}
    },
    newRegistration: false //redirect после регистрации нового пользователя
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                loggedIn: true,
                user: action.payload
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
}
export const setNewUserAC = (newRegistration) => {
    return {
        type: SET_NEW_USER,
        newRegistration: newRegistration
    }
}

export const getCurrentUserTC = () => {
    return async (dispatch) => {
        const token = cookie.get("token");
        let data = await authApi.getUser(token);

        dispatch(setUserDataAC(data.data.user));
    }
} //Thunk


export const login = (email, password) => {
    return async (dispatch) => {
        let data = await authApi.authLogin(email, password);

        if (data.errors) {
            dispatch(stopSubmit("login", {_error: data.errors}));
        } else {
            let date = new Date();
            date.setTime(date.getTime() + (180 * 60 * 1000)); //минуты - секунды - милисекунды
            cookie.set("token", data.data.access_token, {expires: date});

            dispatch(getCurrentUserTC())
        }
    }
}

export const register = (name, email, password, password_conformation) => {
    return async (dispatch) => {
        const registerData = {name, email, password, password_conformation};

        let data = await authApi.authRegister(registerData);

        if (data.errors) {
            dispatch(stopSubmit("register", {_error: data.errors}));
        } else {
            dispatch(setNewUserAC(true))
        }
    }
}

export default authReducer;
