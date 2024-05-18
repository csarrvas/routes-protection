import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import ContextProvider from './context/ContextProvider'
import Login from './auth/Login'
import Logout from './auth/Logout'
import Layout from './layout/Layout'
import PublicRoute from './router/PublicRoute'
import PrivateRoute from './router/PrivateRoute'


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/login',
          element: <PublicRoute component={<Login />} />
        },
        {
          path: '/logout',
          element: <PrivateRoute component={<Logout />} />
        },
        {
          path: '/public',
          element: <PublicRoute component={<div>Hello world!</div>} />
        },
        {
          path: '/private',
          element: <PrivateRoute component={<div>Hello world private!</div>} />
        }
      ]
    }
  ])

  return (
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  )
}

export default App
