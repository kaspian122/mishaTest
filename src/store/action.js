import dispatch from '../index';

const actionTypes = {
    SIGN_IN: 'SIGN_IN',
    QUIT: 'QUIT',
};

function signInUser(name) {
    dispatch({ type: actionTypes.SIGN_IN, name });
}

function quit() {
  dispatch({type: actionTypes.QUIT});
}


const Actions = {
    signInUser,
    quit,
};
export default Actions;
