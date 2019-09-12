import React from 'react';
import ReactDOM from 'react-dom';
import styles from './style.scss';

class Portal extends React.Component {
    element = document.createElement('div');

    componentDidMount() {
        document.body.appendChild(this.element);
    }

    componentWillUnmount() {
        document.body.removeChild(this.element);
    }

    render() {
        const { classes } = this.props;
        const { children } = this.props;
        this.element.classList.add('portal');
        return ReactDOM.createPortal(children, this.element);
    }
}

export default Portal;
