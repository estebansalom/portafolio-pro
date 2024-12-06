import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './i18n.js'
import Header from './components/header/Header.jsx'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router'
import Contact from './components/contact/Contact.jsx'
import Projects from './pages/projects/Projects.jsx'

const Layout = () => {
  return(
    <div className='App'>
      <Header/>
      <Outlet />
      <Contact />
    </div>
  )
}

const router = createBrowserRouter(
  [
    {
      path: '/portafolio-pro/',
      element: <Layout/>,
      children:[
        {
          path:'/portafolio-pro/',
          element: <App/>,

        },
        {
          path:'/portafolio-pro/projects',
          element: <Projects/>,
          
        }
      ]
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
