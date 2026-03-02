export default function SearchBar({ value, onChange }) {
	return (
		<div id="search-section">
			<label htmlFor="search-input">Search</label>

			<input
				id="search-input"
				type="search"
				placeholder="Search for a country..."
				value={value}
				onChange={(e) => onChange(e.target.value)}
			/>
		</div>
	);
}
