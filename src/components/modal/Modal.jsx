import React from 'react';
import style from './Modal.scss';
import Portal from './Portal';

const Modal = props => {
        const {children } = props;
        return (
            <Portal>
                <div className='modal'>{children}</div>
            </Portal>
        );
}

export default Modal;
