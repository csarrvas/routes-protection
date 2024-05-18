import { createContext } from 'react'

type AppContextInterface = {
  isLogged: boolean,
  login: () => void,
  logout: () => void
}

const defaultContext: AppContextInterface = {
  isLogged: false,
  login: () => {},
  logout: () => {}
}

export const AppContext = createContext(defaultContext)