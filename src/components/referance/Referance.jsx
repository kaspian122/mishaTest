import './Referance.scss';
import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../modal';
import Button from '../button';

function Referance(props) {
    const {closeModal} = props;

    return (
        <Modal>
            <div className="referance">
                <Button
                    onClick={closeModal}
                    text="Закрыть окно"
                    parent="referance__button--top-right"
                />
                <div className="referance__content">
                    <h1>TEST</h1>
                    <div>wefwefwefwef wefwef wef wef we fwee f</div>
                </div>
            </div>
        </Modal>
    )
}

Referance.propTypes = {
    closeModal: PropTypes.func.isRequired,
};


export default Referance;