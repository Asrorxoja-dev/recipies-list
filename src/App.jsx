import { BrowserRouter, RouterProvider, Router, createBrowserRouter } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import Create from './pages/Create'
import SingleResipie from './pages/SingleResipie'

function App() {
 const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:"/create",
        element:<Create/>
      },
      {
        path:"/singleResipie/:id",
        element:<SingleResipie/>
      }
    ]
  },

  
 ])

  return <RouterProvider router={routes}/>
   
}

export default App
