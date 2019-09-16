import React, { useState } from 'react';
import './style.scss';
import Actions from '../../store/action';
import { connect } from 'react-redux';
import Api from '../../utils/api';
import Referance from "../../components/Referance";

function LoginPage(props){

  const [name, setName] = useState('');
  const [error, setError] = useState(false);
  const [modal, setModal] = useState(false);

  let handleInput = event => {
    setName( event.target.value);
  };

  let userAuth = () => {
    Actions.signInUser(name);
    props.history.push('/news');
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

  console.log(props)
  return(
      <div className="container">
        {modal ? <Referance closeModal={showModal}/> : null}
        <div className="login_form">
          <div className="form_header">
            <span>Авторизация</span>
            <div className='referanceIcon' onClick={showModal}>
              <img alt ='' src="https://img.icons8.com/material-outlined/48/000000/bookmark.png"/>
            </div>
          </div>
          <div className="form_content-wrapper">
            <div className="form_input-wrapper">
              <input type="text" className="form_input" value={name} onChange={handleInput}/>
            </div>
            {error ?
                <div className="login_error">
                  <span>Пользователь не найден.</span>
                </div>
                : null
            }
            <div className="form_button-wrapper">
              <div><input type="button" className="form_button" onClick={handleClick} value="Войти"/></div>
            </div>
          </div>
        </div>
      </div>
  );
}

const mapStateToProps = state => {
  return {currentUser: state.auth.currentUser}
};

export default connect(mapStateToProps)(LoginPage);