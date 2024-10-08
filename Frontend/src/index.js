import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Plants from './Component/Plants/Plants';
import Layout from './Layout';
import Garden from './Component/Garden/Garden';
import PlantDet from './Component/PlantDet/PlantDet';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "plants",
        element: <Plants />,
      },
      {
        path: "garden",
        element: <Garden />,
      },
      {
        path: "plantDet",
        element: <PlantDet />,
      },

      // Add more pages here if needed
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
