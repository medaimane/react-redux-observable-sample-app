import {combineEpics} from 'redux-observable';
import {attemptLoginEpic} from '../../Auth/AuthEpic';

export default combineEpics(
    attemptLoginEpic
);