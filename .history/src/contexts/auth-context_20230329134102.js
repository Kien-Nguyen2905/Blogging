import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const AuthContext = createContext();
function AuthProvider(props) {
    const [data,setData]=useState()
  return <AuthContext.Provider value={} {...props}></AuthContext.Provider>;
}
function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
export { AuthProvider, useAuth };
