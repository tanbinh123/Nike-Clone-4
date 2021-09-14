import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import DrawerContent from './DrawerContent';

const Backdrop = (props) => {
    return <div className='fixed top-0 left-0 w-full h-screen bg-current opacity-50 z-20' onClick={props.hideModal}></div>
};

const portalElement = document.getElementById('sideDrawer');

const SideDrawer = (props) => {

    return (
        <Fragment>
            {props.showSideDrawer && ReactDOM.createPortal(<Backdrop hideModal={props.hideDrawer} />, portalElement)}
            {props.showSideDrawer && ReactDOM.createPortal(<DrawerContent showModal={props.showModal} hideModal={props.hideDrawer}/>, portalElement)}
        </Fragment>
    );
};

export default SideDrawer;