import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Component/Root/Root.jsx'
import Home from './Component/Pages/Home.jsx'
import Appdetails from './Component/Pages/Appdetails.jsx'
import AllApps from './Component/Pages/AllApps.jsx'
import InstalledApps from './Component/Pages/InstalledApps.jsx'



const router = createBrowserRouter([
  {
    path:"/",
    element: <Root></Root>,
    children:[
      {
        index:true,
        loader:() => fetch('/appsData.json'),
        element:<Home></Home>
      },
      {
        path:"/appdetails/:id",
        loader:() => fetch('/appsData.json'),
        element:<Appdetails></Appdetails>
      },
      {
        path:"/apps",
        loader:() => fetch('/appsData.json'),
        element:<AllApps></AllApps>
      },
      {
        path:"/installation",
        loader:()=> fetch('/appsData.json'),
        element:<InstalledApps></InstalledApps>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
