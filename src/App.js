import React, { Fragment, useState } from 'react';
import Header from './components/Layout/Header';
import MainContent from './components/Layout/MainContent';
import Navbar from './components/Layout/Navbar';
import SideDrawer from './components/Layout/SideDrawer';
import Modal from './components/UI/Modal';

const App = () => {

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSideDrawer, setSideDrawer] = useState(false);
  
  const showLoginModalHandler = () => {
    setShowLoginModal(true);
  };
  const hideLoginModalHandler = () => {
    setShowLoginModal(false);
  };

  const showDrawerHandler = () => {
    setSideDrawer(true);
  };
  const hideSideDrawerHandler = () => {
    setSideDrawer(false);
  };

  return (
    <Fragment>
      <Header showModal={showLoginModalHandler} />
      <Navbar showDrawer={showDrawerHandler}/>
      <MainContent />
      {showLoginModal && <Modal showModal={showLoginModal} hideModal={hideLoginModalHandler} />}
      {showSideDrawer && <SideDrawer showSideDrawer={showSideDrawer} showModal={showLoginModalHandler} hideDrawer={hideSideDrawerHandler} />}
    </Fragment>
  );
};

export default App;
