import React, {useEffect, useState} from 'react';
import './style.scss';
import Api from '../../utils/api';
import HoverBlock from  '../../components/HoverBlock';

const Admin = ()  => {
    const [notes, setNotes] = useState([]);
    useEffect(() => {
            Api.getAllNotes().then(response => {
                setNotes(response.data);
            })
    });

    return(
        <div className="container">
           <HoverBlock/>
        </div>
    );
}

export default Admin;