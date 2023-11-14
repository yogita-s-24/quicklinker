import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './views/Home/Home.jsx';
import About from './views/About/About.jsx';
import Login from './views/Login/Login.jsx';
import Signin from './views/Signin/Signin.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path :'/signin',
        element:<Signin/>
    }

])

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router}/>)
