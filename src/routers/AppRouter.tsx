import { Routes, Route } from "react-router-dom";
import Home from "../screens/Home";

const AppRouter = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={<Home />}
			>
				{/* <Route
					path=":id"
					element={<ViewQueryResult />}
				/> */}
			</Route>
		</Routes>
	);
};

export default AppRouter;
