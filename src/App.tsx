import { Route, Routes, Navigate } from "react-router-dom";

import IndexPage from "@/pages/index";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";
import EventosPage from "@/pages/eventos";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<EventosPage />} path="/eventos" />
      <Route element={<BlogPage />} path="/blog" />
      <Route element={<AboutPage />} path="/nosotros" />
      <Route element={<Navigate to="/" />} path="*" />
    </Routes>
  );
}

export default App;
