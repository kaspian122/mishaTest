import React, { useState } from 'react';
import './style.scss';
import Actions from '../../store/action';
import { connect } from 'react-redux';
import Api from '../../utils/api';
import Referance from "../../components/referance";
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

      <div className="login">
        {modal ? <Referance closeModal={showModal}/> : null}
        <div className="login__form">
          <div className="login__header">
            <span>Авторизация</span>
            <div className="login__referance-icon" onClick={showModal}>
              <img alt ='' src="https://img.icons8.com/material-outlined/48/000000/bookmark.png"/>
            </div>
          </div>
          <div className="login__content">
            <div className="login__input-wrapper">
              <input type="text" className="input input--login"
                     value={name}
                     onChange={handleInput}
              />
            </div>
            {error ?
                <div className="login__error">
                  <span>Пользователь не найден.</span>
                </div>
                : null
            }
            <div className="login__button-wrapper">
              <input type="button" className="button"
                          onClick={handleClick}
                          value="Войти"
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

export default connect(mapStateToProps)(withRouter(LoginPage));