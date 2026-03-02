import { useEffect, useState, useRef } from "react";

export function useFetch() {
	const [countries, setCountries] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function fetchData() {
			try {
				// destructured > Promise.all to fetch both dataset in parallel > more efficient
				const [responseCountries, responseCodes] = await Promise.all([fetch("https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags,subregion,languages,tld,currencies,borders"), fetch("https://restcountries.com/v3.1/all?fields=name,cca3")]);

				if (!responseCountries.ok) {
					throw new Error(`HTTP error: ${responseCountries.status}`);
				}
				if (!responseCodes.ok) {
					throw new Error(`HTTP error: ${responseCodes.status}`);
				}

				const countryCodeMap = new Map();
				const dataCountries = await responseCountries.json();
				const dataCodes = await responseCodes.json();

				dataCodes.forEach((country) => {
					countryCodeMap.set(country.cca3, country.name.common);
				});

				// add country codes to full country objects
				const countriesWithCodes = dataCountries.map((country) => {
					const match = dataCodes.find((codeCountry) => codeCountry.name.common === country.name.common);

					return {
						...country,
						cca3: match?.cca3,
					};
				});

				setCountries(countriesWithCodes); // use final data
				setLoading(false);
			} catch (error) {
				console.error("Failed to fetch countries:", error);
				setError(error.message);
				setLoading(false);
			}
		}

		fetchData();
	}, []);

	return { countries, loading, error };
}
