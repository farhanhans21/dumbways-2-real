import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ForgotForm, LoginForm, RegisterForm, ResetForm } from '../features/auth'
import Base from '../features/base/components/layouts/Base'
import FollowsLayout from '../features/base/components/layouts/FollowsLayout'
import HomeLayout from '../features/base/components/layouts/HomeLayout'
import ProfileLayout from '../features/base/components/layouts/ProfileLayout'
import SearchLayout from '../features/base/components/layouts/SearchLayout'
import FollowItem from '../features/base/components/page/follows/FollowerItem'
import FollowingItem from '../features/base/components/page/follows/FollowingItem'


function AppRouter() {
  
    const router =  createBrowserRouter([
      {
        path: "/login",
        element: <LoginForm/>
        
      },
      {
        path: "/register",
        element: <RegisterForm/>
      },
      {
        path:"/forget",
        element:<ForgotForm/>
      },
      {
        path:"/reset",
        element:<ResetForm/>
      },
      {
        path:"/",
        element:<Base/>,
        children:[
          {
            index:true,
            element:<HomeLayout/>
          },
          {
            path:"/profile",
            element:<ProfileLayout/>
          },
          {
            path:"/search",
            element:<SearchLayout/>
          },
          {
            path:"/follow",
            element:<FollowsLayout/>
          },
          {
            path:"/followers",
            element:<FollowItem/>
          },
          {
            path:"/following",
            element:<FollowingItem/>
          },
          {
           path:"/login",
           element:<LoginForm/>
          }
        ]
      },
      
    ])
  
  return <RouterProvider router={router}/>
}

export default AppRouter