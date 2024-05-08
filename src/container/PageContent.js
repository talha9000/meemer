import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from './route';
const NotFoundPage=lazy(()=>import('../fixroute/NotFoundPage '))
 

const PageContent = () => {
  return (
    <Suspense fallback={<div className='text-center text-xl'> Loading subpage route</div>}>
      <Routes>
        {
         
        routes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.component />} />
        ))
        }
        {/* Route for 404 page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default PageContent;
