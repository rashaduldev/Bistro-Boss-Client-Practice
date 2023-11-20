import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './Pages/Home/Home';
import Menu from './Pages/Menu/Menu';
import {HelmetProvider } from 'react-helmet-async';
import Orderfood from './Pages/Orderfood/Orderfood';
import Login from './Pages/Login';
import AuthProvider from './Provider/AuthProvider';
import Signup from './Pages/Signup';
import Secret from './Pages/Secret';
import PrivetRoute from './Route/PrivetRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'menu',
        element: <Menu></Menu>,
      },
      {
        path: 'login',
        element: <Login></Login>,
      },
      {
        path: 'signup',
        element: <Signup></Signup>,
      },
      {
        path: 'order/:category',
        element: <Orderfood></Orderfood>,
      },
      {
        path: 'secret',
        element: <PrivetRoute><Secret></Secret></PrivetRoute>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <HelmetProvider>
    <div className='max-w-screen-xl mx-auto'>
     <RouterProvider router={router} />
     </div>
    </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
