import React, {useEffect, useState} from 'react';
import './style.scss';
import Api from '../../utils/api';
import HoverBlock from  '../../components/HoverBlock';
import LoadingSpinner from '../../components/LoadingSpinner';

const Applications = ()  => {
    const [notes, setNotes] = useState([]);
    const [loaded, setLoad] = useState(false);
    useEffect(() => {
            Api.getAllNotes().then(response => {
                    if(response && response.status === 200)
                        setNotes(response.data);
                    setLoad(true);
                }
            )
    },[]);



    return(
        <div className="applications-container">
            {!loaded && <LoadingSpinner/>}
            { (loaded&& !notes) &&
                <div className="applications-container_error-message">
                    Не удалось загрузить заявки.
                </div>
            }
            {(loaded && notes) &&
                notes.length > 0 && notes.map((item, index) =>
                    <div className="applications-container__item">
                        <HoverBlock note={item} id={index}/>
                    </div>
                )
            }
        </div>
    );
}

export default Applications;