import React, { useState } from 'react';
import './style.scss';
import Actions from '../../store/action';
import { connect } from 'react-redux';
import Api from '../../utils/api';
import Referance from "../../components/Referance";
import { withRouter } from 'react-router-dom';


const LoginPage = (props) =>{
  const {history} = props;
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
    try
    {
      const response = await Api.userLogin(name);
      response && response.status === 200 ?
          userAuth() :
          setError(true);

    }
    catch(error) {
      console.log(error);
      setError(true);
    }
  };

  let showModal = () => setModal(!modal);

  return(

      <div className="login-container">
        {modal ? <Referance closeModal={showModal}/> : null}
        <div className="login-container__form">
          <div className="login-container__form__header">
            <span>Авторизация</span>
            <div className="login-container__form__header_referanceIcon" onClick={showModal}>
              <img alt ='' src="https://img.icons8.com/material-outlined/48/000000/bookmark.png"/>
            </div>
          </div>
          <div className="login-container__form__content">
            <div className="login-container__form__content__input-wrapper">
              <input type="text" className="login-container__form__content__input-wrapper_input"
                     value={name}
                     onChange={handleInput}
              />
            </div>
            {error ?
                <div className="login-container__form__content_error">
                  <span>Пользователь не найден.</span>
                </div>
                : null
            }
            <div className="login-container__form__content__button-wrapper">
              <div><input type="button" className="login-container__form__content__button-wrapper_button dark-theme-button"
                          onClick={handleClick}
                          value="Войти"
                    />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

const mapStateToProps = state => {
  return {currentUser: state.auth.currentUser}
};

export default connect(mapStateToProps)(withRouter(LoginPage));