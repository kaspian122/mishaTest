import action from '../index';
import Api from '../utils/api';
import { put, takeEvery, call } from 'redux-saga/effects'

const actionTypes = {
    SIGN_IN: 'SIGN_IN',
    QUIT: 'QUIT',
};

function signInUser(name) {
    action({ type: actionTypes.SIGN_IN, name });
}

function quit() {
  action({type: actionTypes.QUIT});
}

function thunkLogin(name) {
    return (dispatch) => Api.userLogin(name).then(response => {
        console.log(response);
        if (response.status === 200) {
            dispatch({type: actionTypes.SIGN_IN, name});
        }
    })
        .catch(error => console.log('ERROR - ', error));


}

//TODO saga-watchers

function* sagaWatch() {
    yield takeEvery(actionTypes.SIGN_IN, sagaWorker);
}

//TODO saga-worker
function* sagaWorker(action) {
    try {
        console.log('saga');
        const data = yield call(() => Api.userLogin(action.name));
        console.log('data - ', data);
        yield put({ type: actionTypes.SIGN_IN, name: action.name });
    }
    catch(error){
        yield  console.log('ERROR', error);
    }
}






const Actions = {
    signInUser,
    quit,
    thunkLogin,
    sagaWatch,
};
export default Actions;
