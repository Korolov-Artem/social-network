import {setUserData} from "./authReducer";

const SET_INITIALIZED = 'app/SET_INITIALIZED';

let initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;
    }
}

const initializedSuccess = () => ({type: SET_INITIALIZED});
export const initializeApp = () => (dispatch) => {
    let promise = dispatch(setUserData());
    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess());
    })
}

export default appReducer