import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, ReactRouter, RouterProvider} from 'react-router-dom' 
import Homepage from './Pages/Homepage/Homepage';

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children:[
      {
        path:'/',
        element:<Homepage/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

