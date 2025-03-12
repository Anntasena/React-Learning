import { useEffect, useState } from "react";

export function useCountryFlag() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      const cachedData = localStorage.getItem("countries");
      if (cachedData) {
        setCountries(JSON.parse(cachedData));
        setIsLoading(false);
        return;
      }

      try {
        const response = await fetch(
          "https://api.worldbank.org/v2/country?format=json"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch countries");
        }
        const data = await response.json();
        const countryList = data[1].map((country) => ({
          name: country.name,
          iso2Code: country.iso2Code,
        }));
        setCountries(countryList);
        localStorage.setItem("countries", JSON.stringify(countryList));
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCountries();
  }, []);

  return { countries, isLoading, error };
}
