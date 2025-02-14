import {setUserData} from "./authReducer";

const SET_INITIALIZED = 'app/SET_INITIALIZED';

export type InitialStateType = {
    initialized: boolean,    
}
let initialState: InitialStateType = {
    initialized: false,
}

const appReducer = (state = initialState, action):InitialStateType => {
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

type InitializedSuccessActionType = {
    type: typeof SET_INITIALIZED
}
const initializedSuccess = (): InitializedSuccessActionType => ({type: SET_INITIALIZED});

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(setUserData());
    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess());
    })
}

export default appReducer