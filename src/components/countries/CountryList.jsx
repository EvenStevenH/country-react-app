import CountryCard from "./CountryCard";

export default function CountryList({ countries, onSelect }) {
	return (
		<ul id="country-list">
			{countries.map((country) => (
				<CountryCard
					key={country.cca3} // country code as unique, stable key
					country={country}
					onSelect={onSelect}
				/>
			))}
		</ul>
	);
}
