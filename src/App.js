import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Main from './fixroute/Main';
import Navbar from './component/Navbar';
import Drawer from './component/Drawer';
import PageLayout from './container/PageLayout';
import Loader from './component/Loader';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const App = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="relative min-h-screen">
      <QueryClientProvider client={queryClient}>
        <Navbar ButtonEvent={toggleDrawer} />
        <Drawer toggleDrawer={isDrawerOpen} />
        <div className="pt-16 md:pt-20 lg:pt-24"> {/* Adjust top padding for content to avoid hiding behind navbar */}
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/*" element={<PageLayout />} />
            </Routes>
          </Suspense>
        </div>
      </QueryClientProvider>
    </div>
  );
};

export default App;
