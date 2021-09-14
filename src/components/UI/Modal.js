import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Login from '../Login/Login';

const Backdrop = (props) => {
    return <div className='fixed top-0 left-0 w-full h-screen bg-current opacity-50 z-20' onClick={props.hideModal}></div>
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
    return (
        <Fragment>
            {props.showModal && ReactDOM.createPortal(<Backdrop hideModal={props.hideModal} />, portalElement)}
            {props.showModal && ReactDOM.createPortal(<Login hideModal={props.hideModal}/>, portalElement)}
        </Fragment>
    );
};

export default Modal;