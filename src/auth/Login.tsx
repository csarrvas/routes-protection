import { useContext } from "react"
import { AppContext } from "../context/AppContext"

const Login = () => {
  const { login } = useContext(AppContext)

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div>This is a basic login page</div>
      <button onClick={login}>Login</button>
    </div>
  )
}

export default Login