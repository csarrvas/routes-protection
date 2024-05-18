import { ReactElement, useContext } from "react"
import { AppContext } from "../context/AppContext"
import { Navigate } from "react-router-dom"

const PublicRoute = ({ component }: { component: ReactElement }) => {
  const { isLogged } = useContext(AppContext)
  return isLogged ? <Navigate to='/private' /> : component
}

export default PublicRoute