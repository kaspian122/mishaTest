import React from 'react';
import Header from '../Header';

const PageWrapper = (props) => {
    const {renderHeader, children} = props;
    return (
        <React.Fragment>
            {renderHeader && <Header/>}
            {children}
        </React.Fragment>
    );
};

export default PageWrapper;