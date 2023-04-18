import { createContext } from "react";

const AuthContext = createContext();
function AuthProvider({ props }) {
  return <AuthContext.Provider></AuthContext.Provider>;
}
