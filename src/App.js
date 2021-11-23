import { useState, useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import ExtraMenu from "./components/Navigation/ExtraMenu";
import Navbar from "./components/Navigation/Navbar";
import Sidebar from "./components/Navigation/Sidebar";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HelpPage from "./pages/HelpPage";
import NotFoundPage from "./pages/NotFoundPage";
import PostCreatePage from "./pages/Posts/PostCreatePage";
import PostEditPage from "./pages/Posts/PostEditPage";
import PostIndexPage from "./pages/Posts/PostIndexPage";
import AuthPage from "./pages/AuthPage";
import AuthContext from "./store/auth-context";

function App() {
  const authCtx = useContext(AuthContext);
  const [drawerState, setDrawerState] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const openDrawer = () => {
    setDrawerState(true);
  };
  const closeDrawer = () => {
    setDrawerState(false);
  };

  return (
    <>
      <Navbar openDrawer={openDrawer} handleClick={handleClick} />
      <ExtraMenu anchorEl={anchorEl} handleClose={handleClose} />
      <Sidebar drawerState={drawerState} closeDrawer={closeDrawer} />
      <Routes>
        <Route path="/" element={<Navigate to="/posts" />} />
        {!authCtx.isLoggedIn && <Route path="/auth" element={<AuthPage />} />}
        <Route path="/posts" element={<PostIndexPage />} />
        <Route path="/posts/create" element={<PostCreatePage />} />
        {authCtx.isLoggedIn && (
          <Route path="/posts/edit/:postId" element={<PostEditPage />} />
        )}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
