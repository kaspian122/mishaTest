import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { appReducer, initialState } from './store/reducer';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import Actions from './store/action';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(appReducer, initialState, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(Actions.sagaWatch);
const action = (type) =>  store.dispatch(type);
export default  action;

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

