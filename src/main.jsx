import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProjectOne from './ProjectOne.jsx'
import ProjectThree from './ProjectThree.jsx'
import ProjectFour from './ProjectFour.jsx'
import FallbackProject from './FallbackProject.jsx'
import 'lenis/dist/lenis.css'
import { ReactLenis, useLenis } from 'lenis/react'
import Footer from './Footer.jsx'
import CustomCursor from './CustomCursor.jsx'
import { createBrowserRouter, RouterProvider, Outlet, ScrollRestoration } from 'react-router-dom'

const Root = () => {

  const lenis = useLenis((lenis) => {
    console.log(lenis)
  })

  return (
    <>
      <ReactLenis root options={{ lerp: 0.06, wheelMultiplier: 0.6 }} />
      <CustomCursor />
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
        element: <ProjectThree />
      },
      {
        path: "projects/4",
        element: <ProjectFour />
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
