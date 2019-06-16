import {AuthActionTypes} from "./AuthActions";

const initialState = {
    username: undefined,
    isLoggedIn: false,
    token: undefined,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case AuthActionTypes.LOGIN_ATTEMPTED: {
            return {
                ...state,
                username: action.payload.username,
            };
        }

        case AuthActionTypes.LOGIN_SUCCESSFUL: {
            return {
                ...state,
                isLoggedIn: true,
                token: action.payload.token,
            };
        }

        case AuthActionTypes.LOGIN_FAILED: {
            return {
                ...initialState,
            };
        }

        default: {
            return state;
        }
    }
}