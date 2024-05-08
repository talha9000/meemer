// mdcontent.js
const readmeContent = `
# Dynamic Routing Documentation

## Overview

This document provides a detailed explanation of the dynamic routing implementation in the Create React App project. Dynamic routing simplifies the process of managing routes by automatically importing route components from specified directories.

## Implementation

### Dynamic Route Path Configuration

The dynamic route path is configured in the \`src/container/route.js\` file. This file contains the logic for importing route components dynamically.

\`\`\`javascript
const routes = importAll([
  require.context('../pages', true, /\.js$/),
]);
\`\`\`

- The \`require.context\` function is utilized for dynamic module loading.
- The \`../pages\` directory is specified as the source directory for route components.
- Subdirectories are included (\`true\` argument).
- Only JavaScript files with a \`.js\` extension are considered as route components (\`/\ .js$/\` regex pattern).
#### Directory Structure
Route components should be organized within the specified directory \`(..pages)\`. Each route corresponds to a separate component file within this directory.

#### Example directory structure:

\`\`\`lua
src/
|-- pages/
|   |-- Home.js
|   |-- About.js
|   |-- Contact.js
|   |-- ...
\`\`\`

### Example Usage
Once the dynamic route path is configured, the imported routes can be utilized within the application. For example, using React Router:

\`\`\`js
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Main from "./fixroute/Main";
import Navbar from "./component/Navbar";
import PageLayout from "./container/PageLayout";

const App = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div className="text-center text-lg">Loading page....</div>}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/*" element={<PageLayout />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
\`\`\`

- The routes array contains the dynamically imported route components.
- Each route component is rendered using the Route component from React Router.
#### Additional Routing Implementation
Here's how routing is done with the provided component structure:
- \`src/container/PageContent.js\`

\`\`\`js
import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from './route';
import NotFoundPage from '../fixroute/NotFoundPage'; // Import your 404 page component

const PageContent = () => {
  return (
    <Suspense fallback={<div className='text-center text-xl'> Loading subpage route</div>}>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.component />} />
        ))}
        {/* Route for 404 page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default PageContent;
\`\`\`

- \`src/container/PageLayout.js\`

\`\`\`js
import React from 'react';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import ErrorBoundary from '../msic/ErrorBoundary';
const PageContent = lazy(() => import('./PageContent'));

const PageLayout = () => {
  return (
    <>
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <PageContent />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default PageLayout;
\`\`\`

## Conclusion

Dynamic routing simplifies route management in React applications by automating the process of importing route components. By following the configuration described above, developers can easily implement dynamic routing in their projects. 
Created by 
M Talha Khalid IOT Noob.
`;

export default readmeContent;
