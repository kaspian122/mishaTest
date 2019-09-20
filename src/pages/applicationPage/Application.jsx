import React, {useEffect, useState} from 'react';
import './style.scss';
import { withRouter } from 'react-router-dom';
import Api from '../../utils/api';
import LoadingSpinner from '../../components/loadingSpinner';

const Application = (props) => {
    const {id} = props.match.params;
    const [note, setNote] = useState(null);
    const [loaded, setLoad] = useState(false);
    useEffect(() => {
        Api.getNote(id).then(response => {
            console.log(response);
            if(response && response.status === 200) {
                setNote(response.data);
            }
            setLoad(true);
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
            { !loaded && <LoadingSpinner/> }
            { (loaded && note) && renderNoteForm() }
            {(loaded && !note) && renderErrorMessage()}
        </div>
    );
};

export default  withRouter(Application);