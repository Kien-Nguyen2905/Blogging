import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/auth-context";

const HomePage = React.lazy(() => import("pages/HomePage"));
const SignInPage = React.lazy(() => import("pages/SignInPage"));
const PostDetailsPage = React.lazy(() => import("pages/PostDetailsPage"));
const BlogPage = React.lazy(() => import("pages/BlogPage"));
const PageNotFound = React.lazy(() => import("pages/PageNotFound"));
const UserUpdate = React.lazy(() => import("module/user/UserUpdate"));
const UserAddNew = React.lazy(() => import("module/user/UserAddNew"));
const UserManage = React.lazy(() => import("module/user/UserManage"));
const UserProfile = React.lazy(() => import("module/user/UserProfile"));
const PostAddNew = React.lazy(() => import("module/post/PostAddNew"));
const PostManage = React.lazy(() => import("module/post/PostManage"));
const PostUpdate = React.lazy(() => import("module/post/PostUpdate"));
const CategoryAddNew = React.lazy(() =>
  import("module/category/CategoryAddNew")
);
const CategoryManage = React.lazy(() =>
  import("module/category/CategoryManage")
);
const CategoryUpdate = React.lazy(() =>
  import("module/category/CategoryUpdate")
);
const DashboardLayout = React.lazy(() =>
  import("module/dashboard/DashboardLayout")
);
const SignUpPage = React.lazy(() => import("./pages/SignUpPage"));
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
            <Route path="/add-post" element={<PostAddNew></PostAddNew>}></Route>
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
