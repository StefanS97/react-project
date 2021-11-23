import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";
import Sidebar from "./components/Navigation/Sidebar";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HelpPage from "./pages/HelpPage";
import NotFoundPage from "./pages/NotFoundPage";
import PostCreatePage from "./pages/Posts/PostCreatePage";
import PostEditPage from "./pages/Posts/PostEditPage";
import PostIndexPage from "./pages/Posts/PostIndexPage";

function App() {
  const [drawerState, setDrawerState] = useState(false);

  const openDrawer = () => {
    setDrawerState(true);
  };

  const closeDrawer = () => {
    setDrawerState(false);
  };

  return (
    <>
      <Navbar openDrawer={openDrawer} />
      <Sidebar drawerState={drawerState} closeDrawer={closeDrawer} />
      <Routes>
        <Route path="/" element={<Navigate to="/posts" />} />
        <Route path="/posts" element={<PostIndexPage />} />
        <Route path="/posts/create" element={<PostCreatePage />} />
        <Route path="/posts/edit/:postId" element={<PostEditPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
