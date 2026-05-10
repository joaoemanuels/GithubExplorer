import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout/index.jsx";
import Home from "../pages/Home/index.jsx";

function AppRoutes() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path="/" element={<Home />} />
			</Route>
		</Routes>
	);
}

export default AppRoutes;
