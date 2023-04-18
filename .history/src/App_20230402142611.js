import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./components/module/dashboard/DashboardLayout";
import PostAddNew from "./components/module/post/PostAddNew";
import { AuthProvider } from "./contexts/auth-context";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
          <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
          <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
          <Route path="/3" element={<DashboardLayout></DashboardLayout>}>
            <Route
              path="/manage/add-post"
              element={<PostAddNew></PostAddNew>}
            ></Route>
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
