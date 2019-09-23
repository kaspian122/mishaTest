import React, {useEffect, useState} from 'react';
import './style.scss';
import Api from '../../utils/api';
import HoverBlock from '../../components/hoverBlock';
import LoadingSpinner from '../../components/loadingSpinner';

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
        <div className="applications">
            {!loaded && <LoadingSpinner/>}
            { (loaded&& !notes) &&
                <div className="applications__error-message">
                    Не удалось загрузить заявки.
                </div>
            }
            {(loaded && notes) &&
                notes.length > 0 && notes.map((item, index) =>
                    <div className="applications__item">
                        <HoverBlock note={item} id={index}/>
                    </div>
                )
            }
        </div>
    );
}

export default Applications;