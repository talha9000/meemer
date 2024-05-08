import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Main from './fixroute/Main';
import Navbar from './component/Navbar';
import Drawer from './component/Drawer';
import PageLayout from './container/PageLayout';
import Loader from './component/Loader';
 
const App = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <Navbar ButtonEvent={toggleDrawer} />
      <Drawer toggleDrawer={isDrawerOpen} />
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/*" element={<PageLayout />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
