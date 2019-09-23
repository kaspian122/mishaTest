import React from 'react';
import './Referance.scss';
import Modal from '../modal';

function Referance({closeModal}) {

    return (
        <Modal>
            <div className="referance">
                <div className="button button--modal--top-right">
                    <input type="button" value='Закрыть окно.' className="dark-theme-button" onClick={closeModal}/>
                </div>
                <div className="referance__content">
                    <h1>TEST</h1>
                    <div>wefwefwefwef wefwef wef wef we fwee f</div>
                </div>
            </div>
        </Modal>
    )
}

export default Referance;