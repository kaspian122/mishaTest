import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header';

const PageWrapper = (props) => {
    const {renderHeader, children} = props;
    return (
        <React.Fragment>
            {renderHeader && <Header/>}
            {children}
        </React.Fragment>
    );
};

PageWrapper.propsTypes = {
    renderHeader: PropTypes.bool.isRequired,
    children: PropTypes.object.isRequired,
};

export default PageWrapper;