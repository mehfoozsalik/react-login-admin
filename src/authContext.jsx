import React, { useReducer } from "react";
import MkdSDK from "./utils/MkdSDK";

export const AuthContext = React.createContext();

function getAuthFromLocalStorage() {
  return localStorage.getItem('Auth')
    ? localStorage.getItem('Auth')
    : false
}
function getRoleFromLocalStorage() {
  return localStorage.getItem('role')
    ? localStorage.getItem('role')
    : null
}
function getTokenFromLocalStorage() {
  return localStorage.getItem('token')
    ? localStorage.getItem('token')
    : null
}

const initialState = {
  isAuthenticated: getAuthFromLocalStorage(),
  user: null,
  token: getTokenFromLocalStorage(),
  role: getRoleFromLocalStorage(),
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      window.location.href = "/" + action.payload.role + "/dashboard";
      localStorage.setItem("Auth", true)
      localStorage.setItem("role",action.payload.role)
      localStorage.setItem("token",action.payload.token)
      return {
        ...state,
        isAuthenticated:true,
        user: action.payload.user_id,
        token: action.payload.token,
        role: action.payload.role
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

let sdk = new MkdSDK();

export const tokenExpireError = (dispatch, errorMessage) => {
  const role = localStorage.getItem("role");
  if (errorMessage === "TOKEN_EXPIRED") {
    dispatch({
      type: "LOGOUT",
    });
    window.location.href = "/" + role + "/login";
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  React.useEffect(() => {
    //TODO
    // const checkAuth = async () => {
    //   const status = await sdk.check(state.role)
    //   if(status === 200){
    //     dispatch({
    //       type: "LOGIN",
    //     });
    //   }
    //   else{
    //     tokenExpireError()
    //   }
    // }
    // checkAuth()
  }, []);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
