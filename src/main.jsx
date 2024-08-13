import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { NotFoundPage } from './pages/NotFoundPage.jsx'
import { HomePage } from './pages/HomePage.jsx'
import { PortfolioPage } from './pages/PortfolioPage.jsx'
import { ContactPage } from './pages/ContactPage.jsx'
import { AboutPage } from './pages/AboutPage.jsx'


const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage/>,
    children:[
      {
        path:'/',
        element: <HomePage/>,
      },
      {
        path:'/Portfolio',
        element: <PortfolioPage />
      },
      {
        path:'/Contact',
        element: <ContactPage />
      },
      {
        path:'/About',
        element: <AboutPage />
      },
    ]
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </StrictMode>,
)
