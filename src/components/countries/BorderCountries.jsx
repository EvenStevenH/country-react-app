export default function BorderCountries({ borderCodes = [], allCountries, onSelect }) {
	const borderingCountries = borderCodes
		.map((code) => allCountries.find((country) => country.cca3 === code)) // find bordering countries based on their codes
		.filter(Boolean); // filter out any undefined values

	return (
		<div className="border-countries">
			<strong>Border Countries:</strong>

			{borderCodes.length > 0 ? (
				borderingCountries.map((country) => (
					<span
						key={country.cca3}
						className="bordering-country"
						onClick={() => onSelect(country)}
					>
						{country.name.common}
					</span>
				))
			) : (
				<span> N/A</span>
			)}
		</div>
	);
}
