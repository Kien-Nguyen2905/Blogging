import CategoryAddNew from "module/category/CategoryAddNew";
import DashboardLayout from "module/dashboard/DashboardLayout";
import PostAddNew from "module/post/PostAddNew";
import PostManage from "module/post/PostManage";
import UserAddNew from "module/user/UserAddNew";
import UserProfile from "module/user/UserProfile";
import DashboardPage from "pages/DashboardPage";
import HomePage from "pages/HomePage";
import PageNotFound from "pages/PageNotFound";
import PostDetailsPage from "pages/PostDetailsPage";
import SignInPage from "pages/SignInPage";
import CategoryManage from "module/category/CategoryManage";
import CategoryUpdate from "module/category/CategoryUpdate";
import UserManage from "module/user/UserManage";
import UserUpdate from "module/user/UserUpdate";
import PostUpdate from "module/post/PostUpdate";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "contexts/auth-context";
import SignUpPage from "pages/SignUpPage";
import BlogPage from "pages/BlogPage";
function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
          <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
          <Route path="/blog" element={<BlogPage></BlogPage>}></Route>
          <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
          <Route
            path="/:slug"
            element={<PostDetailsPage></PostDetailsPage>}
          ></Route>
          <Route element={<DashboardLayout></DashboardLayout>}>
            <Route
              path="/manage/post"
              element={<PostManage></PostManage>}
            ></Route>
            <Route
              path="/manage/add-post"
              element={<PostAddNew></PostAddNew>}
            ></Route>
            <Route
              path="/manage/update-post"
              element={<PostUpdate></PostUpdate>}
            ></Route>
            <Route
              path="/manage/category"
              element={<CategoryManage></CategoryManage>}
            ></Route>
            <Route
              path="/manage/user"
              element={<UserManage></UserManage>}
            ></Route>
            <Route
              path="/manage/add-category"
              element={<CategoryAddNew></CategoryAddNew>}
            ></Route>
            <Route
              path="/manage/update-category"
              element={<CategoryUpdate></CategoryUpdate>}
            ></Route>
            <Route
              path="/manage/add-user"
              element={<UserAddNew></UserAddNew>}
            ></Route>
            <Route
              path="/manage/update-user"
              element={<UserUpdate></UserUpdate>}
            ></Route>
            <Route
              path="/profile"
              element={<UserProfile></UserProfile>}
            ></Route>
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
