import React, {useEffect, useState} from 'react';
import './style.scss';
import Api from '../../utils/api';
import HoverBlock from  '../../components/HoverBlock';

const Applications = ()  => {
    const [notes, setNotes] = useState([]);
    useEffect(() => {
            Api.getAllNotes().then(response => {
                setNotes(response.data);
            })
    },[]);



    return(
        <div className="applications-container">
            {
                notes.length > 0 && notes.map(item =>
                    <div className="applications-container__item">
                        <HoverBlock note={item}/>
                    </div>
                )
            }
        </div>
    );
}

export default Applications;