import { useMemo } from "react";

export function useFilteredCountries(countries, searchTerm, region) {
	return useMemo(() => {
		return countries
			.filter(
				(c) =>
					region // selected region
						? c.region.toLowerCase().includes(region.toLowerCase()) // "includes" check if country's region matches selected region
						: true, // selected region is falsy > show all
			)
			.filter((c) => c.name.common.toLowerCase().includes(searchTerm.toLowerCase())); // applied to previous filter results, based on search term
	}, [countries, searchTerm, region]); // if no dependencies change since last call, return memoized result instead of recomputing it
}
