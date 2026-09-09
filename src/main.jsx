import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProjectOne from './ProjectOne.jsx'
import ProjectThree from './ProjectThree.jsx'
import FallbackProject from './FallbackProject.jsx'
import Footer from './Footer.jsx'
import { createBrowserRouter, RouterProvider, Outlet, ScrollRestoration } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/next';

const Root = () => {
  return (
    <>
      <ScrollRestoration />
      <Analytics />
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
        element: <ProjectThree />
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
