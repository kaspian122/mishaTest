import React from 'react';
import styles from './style.scss';
import Portal from './portal';

class Modal extends React.Component {
    state = {};

    render() {
        const { classes, children } = this.props;
        return (
            <Portal>
                <div className='modal'>{children}</div>
            </Portal>
        );
    }
}

export default Modal;
