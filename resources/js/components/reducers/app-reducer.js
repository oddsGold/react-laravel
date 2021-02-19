import {getCurrentUserTC} from "./auth-reducer";
import {menusItem} from "./navbar-reducer";

const INITIALIZED = 'INITIALIZED';


let initialState = {
    initialized: false,
}


const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const initializedSuccess = () => {
    return {
        type: INITIALIZED,
    }
}

export const initializedSuccessApp = () => {
    return (dispatch) => {
        dispatch(initializedSuccess());

        // let promise = dispatch(menusItem());
        //
        // promise.then(() => {
        //     dispatch(initializedSuccess());
        // })
    }
} //Thunk



export default appReducer;
