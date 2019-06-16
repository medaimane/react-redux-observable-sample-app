import {applyMiddleware, createStore} from 'redux';
import {createEpicMiddleware} from "redux-observable";
import {createBrowserHistory} from "history";
import {composeWithDevTools} from "redux-devtools-extension";
import {routerMiddleware} from 'connected-react-router';
import createRootReducer from '../reducers';
import rootEpic from '../epics';

const epicMiddleware = createEpicMiddleware();

export const history = createBrowserHistory();

export default function configureStore() {
 const store = createStore(
     createRootReducer(history),
     composeWithDevTools(
        applyMiddleware(
            routerMiddleware(history),
            epicMiddleware
        ),
     ),
     // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );

 epicMiddleware.run(rootEpic);

 return store;
}