import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { routesLinks } from './routesLinks'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: routesLinks.map((route) => ({
      path: route.path,
      element: route.element,
    }))
  },
])
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
