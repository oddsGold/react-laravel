import {menusApi} from "../api/Api";

const GET_MENU = 'GET_MENU';

let initialState = {
    menuItems: []
};

const navbarReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_MENU:
            return {
                ...state,
                menuItems: action.menu
            }
        default:
            return state;
    }
}

export const getMenuAC = (menu) => {
    return {
        type: GET_MENU,
        menu: menu
    }
}

export const menusItem = () => {
    return async (dispatch) => {
        let data = await menusApi.getMenu();
        dispatch(getMenuAC(data))
    }
}

export default navbarReducer;
