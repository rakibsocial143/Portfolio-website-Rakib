import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import HomeLayout from './Components/Layouts/HomeLayout'
import About from './Components/About/About'
import Product from './Components/Product/Product'
import Home from './Components/Home/Home'
// import Contacts from './Components/Contacts/Contacts'
import Skills from './Components/Skill/Skills'


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout/>,
    children : [
      {
        index: true ,
        path: '/',
        element: <Home/>

      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/contacts',
        element: <Product/>
        
      },
      {
        path: '/skills',
        element: <Skills/>
        
      },

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)


