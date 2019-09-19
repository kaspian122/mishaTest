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
    console.log(notes)
    return(
        <div className="table-container">
            <div className="table-container__row">
                <span className="table-container__row__column">
                    <HoverBlock/>
                </span>
                <span className="table-container__row__column">
                    <HoverBlock/>
                </span>
                <span className="table-container__row__column">
                    <HoverBlock/>
                </span>
                <span className="table-container__row__column">
                    <HoverBlock/>
                </span>
                <span className="table-container__row__column">
                    <HoverBlock/>
                </span>
            </div>
            <div className="table-container__row">
                <span className="table-container__row__column">
                    <HoverBlock/>
                </span>
                <span className="table-container__row__column">
                    <HoverBlock/>
                </span>
                <span className="table-container__row__column">
                    <HoverBlock/>
                </span>
                <span className="table-container__row__column">
                    <HoverBlock/>
                </span>
                <span className="table-container__row__column">
                    <HoverBlock/>
                </span>
            </div>
            <div className="table-container__row">
                <span className="table-container__row__column">
                    <HoverBlock/>
                </span>
                <span className="table-container__row__column">
                    <HoverBlock/>
                </span>
                <span className="table-container__row__column">
                    <HoverBlock/>
                </span>
                <span className="table-container__row__column">
                    <HoverBlock/>
                </span>
                <span className="table-container__row__column">
                    <HoverBlock/>
                </span>
            </div>
        </div>
    );
}

export default Admin;