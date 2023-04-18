import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/auth-context";

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/signup" element={<SignUpPage></SignUpPage>}></Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
