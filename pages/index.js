import React, { useState } from 'react';

//Styles
import styles from '../styles/Home.module.css';
import 'react-responsive-modal/styles.css';

//Components
import TabComponent from '../components/TabComponent';
import ConvertTitle from '../components/ConvertTitle';
import CryptoStatusView from '../components/CryptoStatusView';

const Home = () => (
  <div className="mx-auto relative overflow-hidden bg-gray-100 w-full">
    <div className="p-10 h-screen">
      <ConvertTitle />
      <TabComponent />
      <CryptoStatusView />
    </div>
  </div>
);

export default Home;
