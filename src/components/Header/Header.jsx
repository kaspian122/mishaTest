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
        <header>
                {
                    currentUser ?
                        <React.Fragment>
                            <div className="header-content">
                                {links.map((item, index) =>
                                    <span className="header-content_link" key={keyUtils(`header_links_${index}_`)}>
                                         <Link to={item.link}>{item.text}</Link>
                                     </span>
                                )
                                }
                                {
                                    props.currentUser === 'admin' ?
                                        <Link to="/applications"><span className="header-content_link"> Просмотреть заявки</span></Link> : null
                                }
                            </div>
                                <div className="exit-button-wrapper">
                                    <span className="activeUser">{props.currentUser}</span>
                                    <input type="button" value="Выйти" className='exit-button-wrapper_exit-button dark-theme-button' onClick={handleClick}/>
                                </div>
                        </React.Fragment>
                        :
                        <span className="header-content_link">
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
