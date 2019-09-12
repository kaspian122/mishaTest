import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';

export const initialState = { auth: {currentUser: ''} };

function rootReducer(state=initialState, action) {
    switch(action.type) {
        case 'SIGN_IN':
            return {...state, currentUser: action.name};
        case 'QUIT':
            return {...state, currentUser: ''};
        default:
            return state;
    }
};

 export const appReducer = combineReducers({
     auth: rootReducer,
     form,
 });