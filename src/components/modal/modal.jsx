import React from 'react';
import style from './style.scss';
import Portal from './portal';

const Modal = props => {
        const {children } = props;
        return (
            <Portal>
                <div className='modal'>{children}</div>
            </Portal>
        );
}

export default Modal;
