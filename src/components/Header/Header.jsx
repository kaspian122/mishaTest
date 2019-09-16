import React from 'react';
import {Link} from "react-router-dom";
import './style.scss';
import {connect} from 'react-redux';
import keyUtils from '../../utils/keyUtils';
import Actions from '../../store/action';

const Header = (props) =>  {
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
                    props.currentUser ?
                        <React.Fragment>
                            <div className="row">
                                {links.map((item, index) =>
                                    <span className="link" key={keyUtils(`header_links_${index}_`)}>
                                         <Link to={item.link}>{item.text}</Link>
                                     </span>
                                )
                                }
                                {
                                    props.currentUser === 'admin' ?
                                        <Link to="/admin"><span className="link"> Просмотреть заявки</span></Link> : null

                                }
                            </div>
                                <div className="exit-button-wrapper">
                                    <span className="activeUser">{props.currentUser}</span>
                                    <input type="button" value="Выйти" className='exit-button' onClick={handleClick}/>
                                </div>
                        </React.Fragment>
                        :
                        <span className="link">
                            <Link to="/login">Войти</Link>
                        </span>

                }
        </header>
    )
}

const mapStateToProps = state => {
    return {
        currentUser: state.auth.currentUser
    }
};

export default connect(mapStateToProps)(Header);
