import React from 'react';
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

export default PageWrapper;