import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout/index.jsx";
import Home from "../pages/Home/index.jsx";
import Repositories from "../pages/Repositories/index.jsx";
import Followers from "../pages/Followers/index.jsx";
import Follow from "../pages/Follow/index.jsx";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/repositorios" element={<Repositories />} />
        <Route path="/seguidores" element={<Followers />} />
        <Route path="/seguindo" element={<Follow />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
