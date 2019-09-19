import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import PageWrapper from "../PageWrapper";

const ProtectedPage = ({children, renderHeader, path, auth, history, ...rest}) => {
    return (
        <Route {...rest} render={() => {
            if(path === '/login') {
                return <PageWrapper {...rest}  renderHeader={renderHeader}> {children} </PageWrapper>
            }
            if (path === '/admin' && auth === 'admin')
                return <PageWrapper {...rest} renderHeader={renderHeader}> {children} </PageWrapper>;
            else if (auth) {
                return <PageWrapper {...rest} renderHeader={renderHeader}> {children} </PageWrapper>;
            } else {
               return <Redirect to="/login"/>;

            }
        }
        }/>
    )
};


const mapStateToProps = (state) => {
    return {
        auth: state.auth.currentUser,
    }

};

export default connect(mapStateToProps)(ProtectedPage);