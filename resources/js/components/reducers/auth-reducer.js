// import {usersAPI} from "../api/Api";
import {stopSubmit} from "redux-form";
import {authApi} from "../api/Api";

const SET_USER_DATA = 'SET-USER-DATA';
const SET_CURRENT_USER_IMG = 'SET-CURRENT-USER-IMG';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false, //не залогинен -> true - залогинен
}

function setUserData(state, data) {
    return {
        ...state,
        ...data
    }
}

function setCurrentUser(state, userImg) {
    return {
        ...state,
        currentUserImg: userImg
    }
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return setUserData(state, action.data);
        case SET_CURRENT_USER_IMG:
            return setCurrentUser(state, action.userImg)
        default:
            return state;
    }
}

export const setUserDataAC = (userId, email, login, isAuth) => {
    return {
        type: SET_USER_DATA,
        data: {userId, email, login, isAuth}
    }
}

export const getCurrentUserTC = () => {
    return (dispatch) => {
        return usersAPI.currentUser()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data; //деструктеризация
                    dispatch(setUserDataAC(id, email, login, true));
                }
            })
    }
} //Thunk


export const login = (data) => {
    return async (dispatch) => {
        let data = await authApi.authLogin(data);

        // if (data.resultCode === 0) {
        //     dispatch(getCurrentUserTC())
        // } else {
        //     dispatch(stopSubmit("login", {_error: data.messages[0]}));
        // }


    }
}

export default authReducer;
