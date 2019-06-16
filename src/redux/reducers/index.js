import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import AuthReducer from '../../Auth/AuthReducer';

export default history => combineReducers({
    router: connectRouter(history),
    AuthReducer,
});