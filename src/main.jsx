import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProjectOne from './ProjectOne.jsx'
import FallbackProject from './FallbackProject.jsx'
import { createBrowserRouter, RouterProvider, Outlet, ScrollRestoration } from 'react-router-dom'
import Footer from './Footer.jsx'

const Root = () => {
  return (
    <>
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <App />
      },
      {
        path: "projects/1",
        element: <ProjectOne />
      },
      {
        path: "projects/2",
        element: <FallbackProject />
      },
      {
        path: "projects/3",
        element: <FallbackProject />
      },
      {
        path: "projects/4",
        element: <FallbackProject />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
