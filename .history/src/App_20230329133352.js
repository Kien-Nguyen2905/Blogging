import { Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/auth-context";
function App() {
  return (
    <div>
      <AuthProvider></AuthProvider>
      <Routes></Routes>
    </div>
  );
}

export default App;
