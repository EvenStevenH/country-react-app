export default function CountryCard({ country, onSelect }) {
	return (
		<li
			className="country-item"
			onClick={() => onSelect(country)}
		>
			<img
				src={country.flags.png}
				alt={country.flags.alt || `${country.name.common} flag`}
			/>
			<div className="country-info">
				<h2>{country.name.common}</h2>
				<p>Population: {country.population.toLocaleString()}</p>
				<p>Region: {country.region}</p>
				<p>Capital: {country.capital?.[0] || "N/A"}</p>
			</div>
		</li>
	);
}
