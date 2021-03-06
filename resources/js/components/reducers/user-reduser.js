import {usersApi} from "../api/Api";
import {stopSubmit} from "redux-form";
import {setNewUserAC} from "./auth-reducer";

const GET_USERS = 'GET_USERS';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const SET_USERS_COUNT = 'SET-USERS-COUNT';
const PER_PAGE = 'PER_PAGE';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const DELETE_USER = 'DELETE_USER';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = {
    usersList: [],
    totalUsersCount: 0,
    perPage: 0,
    isFetching: false,
    userProfile: [],
    tempUserImage:[]
}

function editUsersList (state, user) {
    const newUsersList = state.usersList.slice()
    newUsersList.splice(newUsersList.indexOf(user), 1);

    return {
        ...state,
        usersList: newUsersList
    }
}

function objToString (obj) {
    let str = '';
    for (let p in obj) {
        if (obj.hasOwnProperty(p)) {
            str += obj[p];
        }
    }
    return str;
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                usersList: action.users
            }
        case SET_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.usersCount
            }
        case PER_PAGE:
            return {
                ...state,
                perPage: Number(action.perPage)
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.profile
            }
        case DELETE_USER:
            return editUsersList(state, action.user)
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                userProfile: {
                    ...state.userProfile
                },
                tempUserImage: action.photos
            }
        default:
            return {
                ...state
            }
    }
}

export const getUsersAC = (users) => {
    return {
        type: GET_USERS,
        users: users
    }
}

export const setIsFetchingAC = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching: isFetching
    }
}

export const setUsersCountAC = (count) => {
    return {
        type: SET_USERS_COUNT,
        usersCount: count
    }
}

export const perPageAC = (perPage) => {
    return {
        type: PER_PAGE,
        perPage: perPage
    }
}

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile: profile
    }
}

export const deleteUser = (user) => {
    return {
        type: DELETE_USER,
        user: user
    }
}

export const savePhotoSuccess = (photos) => {
    return {
        type: SAVE_PHOTO_SUCCESS,
        photos: photos
    }
}

export const getUsersTC = (pageNumber, pageSize) => {
    return async (dispatch) => {

        let data = await usersApi.getUsers(pageNumber, pageSize);

        dispatch(setIsFetchingAC(true));
        dispatch(getUsersAC(data.data));
        dispatch(setUsersCountAC(data.total));
        dispatch(perPageAC(data.per_page));
    }
}

export const userProfileTC = (id) => {
    return async (dispatch) => {
        dispatch(setIsFetchingAC(true));
        let data = await usersApi.getUserProfile(id);
        dispatch(setUserProfile(data))
        dispatch(setIsFetchingAC(false));

    }
}

export const updateUsersTC = (id, name, email, password, image_id) => {
    return async (dispatch) => {
        const updateData = {id, name, email, password, image_id};

        let data = await usersApi.updateUser(updateData)

        if (!data.errors) {
            dispatch(userProfileTC(id));
        }else {
            dispatch(stopSubmit("update", {_error: data.errors}));
        }
    }
}

export const savePhotoTC = (id, file) => {
    return async (dispatch) => {
        const updateData = {id, file};

        let data = await usersApi.uploadImage(updateData);


        if (!data.errors) {
            dispatch(savePhotoSuccess(data))
        }else {
            dispatch(stopSubmit("update", {_error: data.errors}));
        }
    }
}

export const deleteUsersTC = (user) => {
    return async (dispatch) => {

        let data = await usersApi.deleteUser(user.id)

        if (!data.errors) {
            dispatch(deleteUser(user));
        }else {
            dispatch(stopSubmit("update", {_error: data.errors}));
        }
    }
}

export default usersReducer;
