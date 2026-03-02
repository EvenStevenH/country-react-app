import "./App.css";
import { useState } from "react";
import { useFetch } from "./hooks/useFetch";
import { useFilteredCountries } from "./hooks/useFilteredCountries";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import RegionFilter from "./components/RegionFilter";
import CountryList from "./components/countries/CountryList";
import CountryDetail from "./components/countries/CountryDetail";

export default function App() {
	const { countries, loading, error } = useFetch();

	const [searchTerm, setSearchTerm] = useState("");
	const [region, setRegion] = useState("");
	const [selectedCountry, setSelectedCountry] = useState(null);

	const filtered = useFilteredCountries(countries, searchTerm, region);

	return (
		<>
			<Header />

			<main>
				{!selectedCountry && (
					<>
						<div
							className="container"
							id="input-section"
						>
							<SearchBar
								value={searchTerm}
								onChange={setSearchTerm}
							/>
							<RegionFilter
								value={region}
								onChange={setRegion}
							/>
						</div>

						{loading && <p>Loading countries...</p>}
						{error && <p className="error-message">{error}</p>}

						{!loading && !error && (
							<CountryList
								countries={filtered}
								onSelect={setSelectedCountry}
							/>
						)}
					</>
				)}

				{selectedCountry && (
					<CountryDetail
						country={selectedCountry}
						allCountries={countries}
						onBack={() => setSelectedCountry(null)}
						onSelect={setSelectedCountry}
					/>
				)}
			</main>
		</>
	);
}
