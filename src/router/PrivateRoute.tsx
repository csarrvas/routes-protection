import { ReactElement, useContext } from 'react'
import { AppContext } from 'context/AppContext'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ component }: { component: ReactElement }) => {
  const { isLogged } = useContext(AppContext)
  return isLogged ? component : <Navigate to='/login' />
}

export default PrivateRoute