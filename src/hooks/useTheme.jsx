import { useEffect, useState } from "react";

export function useTheme() {
	// boolean > initial value determined by checking if stored theme is "dark"
	const [isDark, setIsDark] = useState(() => localStorage.getItem("theme") === "dark");

	// update DOM and localStorage on theme change
	useEffect(() => {
		document.documentElement.classList.toggle("dark-mode", isDark);
		localStorage.setItem("theme", isDark ? "dark" : "light");
	}, [isDark]);

	// function to toggle theme > "setIsDark" to ensure latest state value
	const toggleTheme = () => setIsDark((prev) => !prev);

    // current theme state and toggle function for components to use
	return { isDark, toggleTheme };
}
