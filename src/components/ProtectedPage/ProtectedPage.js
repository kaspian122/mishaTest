import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {connect} from 'react-redux';

function ProtectedPage({component: Component, path, auth, ...rest}) {
    return (
        <Route {...rest} render={() =>
            path === '/admin' && auth === 'admin' ?
                ( <Component/> ) :
                auth ? <Component/> :
                    <Redirect to="/login"/>
        }/>
    )
}


const mapStateToProps = (state) => {
    return {
        auth: state.auth.currentUser,
    }

};

export default connect(mapStateToProps)(ProtectedPage);