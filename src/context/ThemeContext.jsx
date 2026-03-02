import { createContext, useContext } from "react";
import { useTheme } from "../hooks/useTheme";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
	const themeValue = useTheme();
	return <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>;
}

// custom hook > access to context
export function useThemeContext() {
	return useContext(ThemeContext);
}
