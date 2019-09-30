import './LoginForm.scss';
import React, {useState} from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from "react-redux";
import Referance from "../referance";
import Actions from "../../store/action";
import Button from '../button';
import dispatch from '../../index';

const LoginForm = (props) => {
    const {history, currentUser} = props;
    const [name, setName] = useState('');
    const [error, setError] = useState(false);
    const [modal, setModal] = useState(false);

    let handleInput = event => {
        setName( event.target.value);
    };

    let userAuth = () => {
        Actions.signInUser(name);
        history.push("/news");
        setError(false);
    };

    let handleClick = async event => {
        event.preventDefault();
        Actions.signInUser(name);
    };

    let showModal = () => setModal(!modal);

    return (
        <div className="login-form">
            {modal ? <Referance closeModal={showModal}/> : null}
            <div className="login-form__content">
                <div className="login-form__header">
                    <span>Авторизация</span>
                    <div className="login-form__referance-icon" onClick={showModal}>
                        <img alt ='' src="https://img.icons8.com/material-outlined/48/000000/bookmark.png"/>
                    </div>
                </div>
                <div className="login-form__wrapper">
                    <div className="login-form__input-wrapper">
                        <input type="text" className="login-form__authorization-field"
                               value={name}
                               onChange={handleInput}
                        />
                    </div>
                    {error ?
                        <div className="login-form__error">
                            <span>Пользователь не найден.</span>
                        </div>
                        : null
                    }
                    <div className="login-form__button-wrapper">
                        <Button
                            text="Войти"
                            onClick={handleClick}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {currentUser: state.auth.currentUser}
};

export default  connect(mapStateToProps)(withRouter(LoginForm));