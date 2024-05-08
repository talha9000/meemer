import React, { lazy, Suspense } from 'react';
import Loader from '../component/Loader';
const PageContent = lazy(() => import('./PageContent'));

const PageLayout = ({ children }) => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <PageContent />
      </Suspense>
    </>
  );
}

export default PageLayout;
