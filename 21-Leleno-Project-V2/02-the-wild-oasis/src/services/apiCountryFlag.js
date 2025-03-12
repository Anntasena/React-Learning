export function apiCountryFlag() {
  fetch("https://api.worldbank.org/v2/country?format=json")
    .then((res) => res.json())
    .then((data) => {
      data[1].forEach((country) => {
        console.log(`${country.name} - ${country.iso2Code}`);
      });
    })
    .catch((error) => console.error("Error fetching countries:", error));
}
