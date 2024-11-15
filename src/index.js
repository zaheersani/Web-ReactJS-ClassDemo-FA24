import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Users, {UserDetails} from './UsersListing';
import Counter from './Counter';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const myrouter = createBrowserRouter([
  {
    path: '/',
    element: <h3>Home Page</h3>,
    errorElement: <h3>Error Page</h3>
  },
  {
    path: '/about',
    element: <h3>About Page</h3>
  }, 
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/users',
    element: <Users />,
    children: [
      {
        path: '/users/:id',
        element: <UserDetails />
      }
    ]
  }
])

const loginrouter = createBrowserRouter([
  {
    path: '/',
    element: <h3>Login Page</h3>,
    errorElement: <h3>You are not authenticated</h3>
  },
  {
    path: '/register',
    element: <h3>Register Page</h3>
  }
])

const auth = true;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={auth ? myrouter : loginrouter} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
