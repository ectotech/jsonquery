import styles from "./App.module.css";
import { MemoryRouter } from "react-router-dom";
import { AppContextProvider } from "./contexts/AppContext";
import AppRouter from "./routers/AppRouter";

const App = () => {
	return (
		<MemoryRouter>
			<AppContextProvider>
				<div className={styles.container}>
					<AppRouter />
				</div>
			</AppContextProvider>
		</MemoryRouter>
	);
};

export default App;
