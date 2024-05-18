import { useContext } from "react"
import { AppContext } from "../context/AppContext"

const Logout = () => {
  const { logout } = useContext(AppContext)

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div>This is a basic logout page</div>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Logout