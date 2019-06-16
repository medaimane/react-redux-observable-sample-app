import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {Route} from 'react-router-dom';
import store, {history} from "./redux/store";
import {ConnectedRouter} from "connected-react-router";
import ConnectedComponent from './components/App/App';

const RootElement = document.getElementById('root');

ReactDOM.render((
    <Provider store={store()}>
        <ConnectedRouter history={history}>
            <Route path={'/'} component={ConnectedComponent}/>
        </ConnectedRouter>
    </Provider>
    ),
    RootElement,
);