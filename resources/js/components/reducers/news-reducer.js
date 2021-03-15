import {newsApi, usersApi} from "../api/Api";
import {stopSubmit} from "redux-form";
import {setIsFetchingAC} from "./user-reduser";

const GET_NEWS = 'GET_NEWS';
const SET_NEWS_COUNT = 'SET-USERS-COUNT';
const PER_PAGE = 'PER_PAGE';
const SET_CURRENT_NEWS = 'SET_CURRENT_NEWS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = {
    totalNewsCount: 0,
    perPage: 0,
    news: [],
    currentNews: [],
    tempNewsImage:[]
}


const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_NEWS:
            return {
                ...state,
                news: action.news
            }
        case SET_CURRENT_NEWS:
            return {
                ...state,
                currentNews: action.currentNews
            }
        case SET_NEWS_COUNT:
            return {
                ...state,
                totalNewsCount: action.newsCount
            }
        case PER_PAGE:
            return {
                ...state,
                perPage: Number(action.perPage)
            }
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                currentNews: {
                    ...state.currentNews
                },
                tempNewsImage: action.photos
            }
        default:
            return state;
    }
}

export const getNewsAC = (news) => {
    return {
        type: GET_NEWS,
        news: news
    }
}
export const perPageAC = (perPage) => {
    return {
        type: PER_PAGE,
        perPage: perPage
    }
}
export const setNewsCountAC = (count) => {
    return {
        type: SET_NEWS_COUNT,
        newsCount: count
    }
}
export const setCurrentNews = (currentNews) => {
    return {
        type: SET_CURRENT_NEWS,
        currentNews: currentNews
    }
}
export const saveImageSuccess = (photos) => {
    return {
        type: SAVE_PHOTO_SUCCESS,
        photos: photos
    }
}



export const getNewsTC = (pageNumber, pageSize) => {
    return async (dispatch) => {

        let data = await newsApi.getNews(pageNumber, pageSize);

        dispatch(setIsFetchingAC(true));
        dispatch(getNewsAC(data.data));
        dispatch(setNewsCountAC(data.total));
        dispatch(perPageAC(data.per_page));
    }
}
export const getCurrentNewsTC = (id) => {
    return async (dispatch) => {
        dispatch(setIsFetchingAC(true));

        let data = await newsApi.getCurrentNews(id);
        console.log(data.news);

        dispatch(setCurrentNews(data))
        dispatch(setIsFetchingAC(false));

    }
}

export const saveImageTC = (id, file) => {
    return async (dispatch) => {
        const updateData = {id, file};

        let data = await usersApi.uploadImage(updateData);

        if (!data.errors) {
            dispatch(saveImageSuccess(data))
        }else {
            dispatch(stopSubmit("news-update", {_error: data.errors}));
        }
    }
}

export const updateNewsTC = (id, title, published, keywords,description, image_id) => {
    return async (dispatch) => {
        const updateData = {id, title, published, keywords,description, image_id};

        let data = await newsApi.updateNews(updateData)

        if (!data.errors) {
            dispatch(getCurrentNewsTC(id));
        }else {
            dispatch(stopSubmit("update", {_error: data.errors}));
        }
    }
}

export default newsReducer;
