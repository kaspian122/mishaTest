import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import PageWrapper from "../pageWrapper";

const ProtectedPage = (props) => {
    const {
        children,
        renderHeader,
        path,
        auth,
        ...rest
    } = props;

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

ProtectedPage.propTypes = {
    auth: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    renderHeader: PropTypes.bool.isRequired,
    children: PropTypes.object.isRequired,
};


const mapStateToProps = (state) => {
    return {
        auth: state.auth.currentUser,
    }

};

export default connect(mapStateToProps)(ProtectedPage);