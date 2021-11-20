import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";
import Sidebar from "./components/Navigation/Sidebar";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HelpPage from "./pages/HelpPage";
import PostCreate from "./pages/Posts/PostCreate";
import PostIndex from "./pages/Posts/PostIndex";

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
        <Route path="/posts" element={<PostIndex />} />
        <Route path="/posts/create" element={<PostCreate />} />

        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/help" element={<HelpPage />} />
      </Routes>
    </>
  );
}

export default App;
