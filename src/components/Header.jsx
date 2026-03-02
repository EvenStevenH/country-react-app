import { useThemeContext } from "../context/ThemeContext";

export default function Header() {
	const { isDark, toggleTheme } = useThemeContext(); // uses global theme toggle

	return (
		<header>
			<nav>
				<h1 className="title">Where in the world?</h1>

				<button
					id="themeBtn"
					type="button"
					role="switch"
					aria-checked={isDark}
					onClick={toggleTheme}
				>
					{isDark ? "Light Mode" : "Dark Mode"}
				</button>
			</nav>
		</header>
	);
}
