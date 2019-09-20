import React, {useEffect, useState} from 'react';
import './style.scss';
import { withRouter } from 'react-router-dom';
import Api from '../../utils/api';

const Application = (props) => {
    const {id} = props.match.params;
    const [note, setNote] = useState(null);
    useEffect(() => {
        Api.getNote(id).then(response => {
            console.log(response);
            if(response && response.status === 200)
                setNote(response.data);
        })
    },[]);

    const renderNoteForm = () => {
        const keys = Object.keys(note);
        return (
            <React.Fragment>
                <div className="application-container_header">Заявка № {id}</div>
                <div className="application-container__content">
                    {Object.values(note).map((item, index) =>
                        <div className="application-container__content_row">
                            <span>{keys[index]} - {item}.</span>
                        </div>
                    )}
                </div>
            </React.Fragment>
        )
    };

    const renderErrorMessage = () => {
      return (
        <div>
            <span className="application-container_error-message">
                Запись №{id} не найдена.
            </span>
        </div>
      );
    };


    return(
        <div className="application-container">
            { note ? renderNoteForm() : renderErrorMessage() }
        </div>
    );
};

export default  withRouter(Application);