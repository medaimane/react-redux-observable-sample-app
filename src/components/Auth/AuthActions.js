export const AuthActionTypes = {
    LOGIN_ATTEMPTED: 'LOGIN_PAGE/LOGIN_ATTEMPTED',
    LOGIN_SUCCESSFUL: 'LOGIN_PAGE/LOGIN_SUCCESSFUL',
    LOGIN_FAILED: 'LOGIN_PAGE/LOGIN_FAILED',
};

export default class AuthActionCreators {
    static attemptedLogin(payload) {
        return {
            payload,
            type: AuthActionTypes.LOGIN_ATTEMPTED,
        };
    }

    static loginSuccessful(payload) {
        return {
            payload,
            type: AuthActionTypes.LOGIN_SUCCESSFUL,
        };
    }

    static loginFailure(payload) {
        return {
            payload,
            type: AuthActionTypes.LOGIN_FAILED,
        };
    }
}