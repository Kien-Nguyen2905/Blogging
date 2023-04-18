import { createContext } from "react";

const AuthContext = createContext();
function AuthProvider(props) {
  return <AuthContext.Provider {...props}></AuthContext.Provider>;
}
