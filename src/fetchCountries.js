const URL = `https://restcountries.com/v3.1/name/`;

function fetchCountries(name) {
  return fetch(URL + name)
    .then(response => response.json())
    .catch(error => error.json());
}

export { fetchCountries };
