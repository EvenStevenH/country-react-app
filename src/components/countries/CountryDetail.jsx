import BorderCountries from "./BorderCountries";

export default function CountryDetail({ country, allCountries, onBack, onSelect }) {
	if (!country) return null;

	const nativeName = Object.values(country.name.nativeName ?? {})[0]?.common || "N/A";

	const currencies =
		Object.values(country.currencies ?? {})
			.map((c) => c.name)
			.join(", ") || "N/A";

	const languages =
		// converts object into array of language names
		Object.values(
			country.languages ?? {}, // check if null or undefined > empty object as fallback
		).join(", ") || // creates string
		"N/A"; // if resulting string is empty

	return (
		<section className="container">
			<button
				id="backBtn"
				onClick={onBack}
			>
				<span class="material-symbols-outlined">arrow_back_ios</span>Back
			</button>

			<div id="country-detail">
				<img
					src={country.flags.png}
					alt={country.flags.alt || `${country.name.common} flag`}
				/>

				<div className="country-info">
					<h2>{country.name.common}</h2>

					<ul>
						<li>
							<strong>Native Name</strong>: {nativeName}
						</li>
						<li>
							<strong>Population</strong>: {country.population.toLocaleString()}
						</li>
						<li>
							<strong>Region</strong>: {country.region || "N/A"}
						</li>
						<li>
							<strong>Sub Region</strong>: {country.subregion || "N/A"}
						</li>
						<li>
							<strong>Capital</strong>: {country.capital?.[0] || "N/A"}
						</li>
						<li>
							<strong>Top Level Domain</strong>: {country.tld?.[0] || "N/A"}
						</li>
						<li>
							<strong>Currencies</strong>: {currencies}
						</li>
						<li>
							<strong>Languages</strong>: {languages}
						</li>
					</ul>

					<BorderCountries
						borderCodes={country.borders}
						allCountries={allCountries}
						onSelect={onSelect}
					/>
				</div>
			</div>
		</section>
	);
}
