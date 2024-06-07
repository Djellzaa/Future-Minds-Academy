import React from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Summer from './pages/Summer';
import Spring from './pages/Spring';
import Fall from './pages/Fall';
import Winter from './pages/Winter';
import Allseason from './pages/Allseason';

const router = createBrowserRouter([{
  path:'/',
  element:<RootLayout/>,
  errorElement : <Error/>,
  children: [
    { path: '/', element: <Spring /> },
    { path: '/summer', element: <Summer /> },
    { path: '/fall', element: <Fall /> },
    { path: '/winter', element: <Winter /> },
    { path: '/allseason', element: <Allseason /> },
  
  ]
}

]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;


