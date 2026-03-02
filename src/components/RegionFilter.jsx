export default function RegionFilter({ value, onChange }) {
	return (
		<div id="filter-section">
			<label htmlFor="filter-input">Filter</label>

			<select
				id="filter-input"
				value={value}
				onChange={(e) => onChange(e.target.value)}
				tabIndex={1}
			>
				<option value="">Filter by Region</option>
				<option value="Africa">Africa</option>
				<option value="Americas">Americas</option>
				<option value="Asia">Asia</option>
				<option value="Europe">Europe</option>
				<option value="Oceania">Oceania</option>
			</select>
		</div>
	);
}
