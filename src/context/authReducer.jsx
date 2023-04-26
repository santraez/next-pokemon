export const authReducer = (state, action) => {
  switch (action.type) {
    case "signIn":
      return {
        ...state,
        isLoggedIn: true,
        username: "no-username-yet"
      }
    case "changeFavIcon":
      return {
        ...state,
        favoriteIcon: action.payload
      }
    case "logOut":
      return {
        ...state,
        isLoggedIn: false,
        username: undefined,
        favoriteIcon: undefined
      }
    case "changeUsername":
      return {
        ...state,
        username: action.payload
      }
    default:
      return state
  }
}
