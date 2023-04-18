import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const AuthContext = createContext();
function AuthProvider(props) {
  const [info, setInfo] = useState();
  const value = { info, setInfo };
  return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>;
}
function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
export { AuthProvider, useAuth };
