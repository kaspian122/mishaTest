import React from 'react';
import {Link} from "react-router-dom";
import './style.scss';
import {connect} from 'react-redux';
import keyUtils from '../../utils/keyUtils';
import Actions from '../../store/action';

const Header = (props) =>  {
    const {currentUser} = props;

    const links = [
        {
            link: '/news',
            text: 'Новости'
        },
        {
            link: '/request',
            text: 'Подать заявку'
        }
    ];

    const handleClick = event => {
        event.preventDefault();
        Actions.quit();
    };

    return (
        <header className="header">
                {
                    currentUser ?
                        <React.Fragment>
                            <div className="header__content">
                                {links.map((item, index) =>
                                    <span className="header__link" key={keyUtils(`header_links_${index}_`)}>
                                         <Link to={item.link}>{item.text}</Link>
                                     </span>
                                )
                                }
                                {
                                    props.currentUser === 'admin' ?
                                        <Link to="/applications"><span className="header__link"> Просмотреть заявки</span></Link> : null
                                }
                            </div>
                                <div className="header__button-wrapper">
                                    <span className="header__current-user">{props.currentUser}</span>
                                    <input type="button" value="Выйти" className='button button--small' onClick={handleClick}/>
                                </div>
                        </React.Fragment>
                        :
                        <span className="header__link">
                            <Link to="/login">Войти</Link>
                        </span>

                }
        </header>
    )
};

const mapStateToProps = state => {
    return {
        currentUser: state.auth.currentUser
    }
};

export default connect(mapStateToProps)(Header);
