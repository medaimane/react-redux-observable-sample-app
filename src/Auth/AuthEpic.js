import {ofType} from "redux-observable";
import AuthActionCreators, {AuthActionTypes} from "./AuthActions";
import {catchError, map, switchMap} from "rxjs/operators";
import AuthService from "./AuthService";

export const attemptLoginEpic = (action$, state$) => action$.pipe(
    ofType(AuthActionTypes.LOGIN_ATTEMPTED),
    switchMap(action => AuthService.login(
        action.payload.username,
        action.payload.password
    )),
    map(data => AuthActionCreators.loginSuccessful(
        {...data}
    )),
    catchError(() => {

    }),
);