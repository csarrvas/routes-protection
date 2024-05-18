import { ReactElement, useState } from 'react'
import { AppContext } from './AppContext'

const ContextProvider = ({ children }: { children: ReactElement }) => {
  const [isLogged, setIsLogged] = useState(JSON.parse( localStorage.getItem('isLogged') || 'false') )

  const login = () => {
    setIsLogged(true)
    localStorage.setItem('isLogged', JSON.stringify(true))
  }
  const logout = () => {
    setIsLogged(false)
    localStorage.setItem('isLogged', JSON.stringify(false))
  }

  return (
    <AppContext.Provider
      value={{
        isLogged,
        login,
        logout
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default ContextProvider