import React from 'react';
import './style.scss';
import Modal from '../modal';

function Referance({closeModal}) {

    return (
        <Modal>
            <div className="content">
                <h1>TEST</h1>
                <div>wefwefwefwef wefwef wef wef we fwee f</div>
                <input type="button" value='Закрыть окно.' onClick={closeModal}/>
            </div>
        </Modal>
    )
}

export default Referance;