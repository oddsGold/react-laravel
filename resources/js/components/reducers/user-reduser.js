import {usersApi} from "../api/Api";

const GET_USERS = 'GET_USERS';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const SET_USERS_COUNT = 'SET-USERS-COUNT';
const PER_PAGE = 'PER_PAGE';

let initialState = {
    usersList: [],
    totalUsersCount: 0,
    perPage: 0,
    isFetching: false
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
                perPage: action.perPage
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
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

export const getUsersTC = (pageNumber) => {
    return async (dispatch) => {

        let data = await usersApi.getUsers(pageNumber);

        dispatch(setIsFetchingAC(true));
        dispatch(getUsersAC(data.data));
        dispatch(setUsersCountAC(data.total));
        dispatch(perPageAC(data.per_page));
    }
}

export default usersReducer;
