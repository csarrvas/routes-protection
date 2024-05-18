import { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

const Layout = () => {
  const { isLogged } = useContext(AppContext)
  
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.pathname === '/') navigate('/login')
  }, [location.pathname, navigate])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {isLogged ? <p>Logueado</p> : <p>Deslogueado</p>}
      <Outlet />
    </div>
  )
}

export default Layout