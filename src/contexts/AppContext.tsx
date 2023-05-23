import { createContext, useContext, ReactNode, useState } from "react";

interface IAppContext {
	filePath: string | undefined;
}

const AppContext = createContext<IAppContext>({} as IAppContext);
export const useAppContext = () => useContext(AppContext);

interface IProps {
	children: ReactNode;
}

export const AppContextProvider = (props: IProps) => {
	const [filePath, setFilePath] = useState<string | undefined>(undefined);

	return (
		<AppContext.Provider
			value={{
				filePath
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};
