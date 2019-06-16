import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import ConnectedComponent from './components/App/App';
import store from "./redux/store";

const RootElement = document.getElementById('root');

ReactDOM.render((
    <Provider store={store}>
        <ConnectedComponent/>
    </Provider>
    ),
    RootElement,
);