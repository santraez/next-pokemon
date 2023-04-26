import { createContext, useReducer } from "react"
import authReducer from "./authReducer"

export const AuthContext = createContext()

const authInitialState = {
  isLoggedIn: false,
  username: undefined,
  favoriteIcon: undefined
}

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);
  const signIn = () => {
    dispatch({ type: "signIn" })
  }
  const changeFavIcon = (iconName) => {
    dispatch({ type: "changeFavIcon", payload: iconName })
  }
  const logOut = () => {
    dispatch({ type: "logOut" })
  }
  const changeUsername = (username) => {
    dispatch({ type: "changeUsername", payload: username })
  }
  return (
    <AuthContext.Provider
      value={{
        authState: authState,
        signIn: signIn,
        changeFavIcon: changeFavIcon,
        logOut: logOut,
        changeUsername: changeUsername
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
