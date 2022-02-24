// Load Countries
function loadCountries() {
  const countriesList = document.getElementById("countries");
  countriesList.innerHTML = "Loading...";
  fetch("https://restcountries.com/v2/all")
    .then((response) => response.json())
    .then((countries) => {
      countriesList.innerHTML = "";

      countries.forEach((country) => {
        let singleCountry = `<div class="card">
     <img src="${country.flag}" class="card-img-top" alt="${country.name}" />
     <div class="card-body">
       <h5 class="card-title">${country.name}</h5>
       <p class="card-text">Capital: <strong> ${country.capital} </strong></p>
       <a href="#" class="btn btn-primary" onclick="loadCountryDetails('${country.alpha2Code.toLowerCase()}')">View Details</a>
     </div>
   </div>`;
        countriesList.innerHTML += singleCountry;
      });
    });
}

// Search country
function searchCountry(searchTerm) {
  let countries = document.getElementsByClassName("card-title");
  for (country of countries) {
    if (country.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      country.parentElement.parentElement.style.display = "block";
    } else {
      country.parentElement.parentElement.style.display = "none";
    }
  }
}

// Load Country Details
function loadCountryDetails(code) {
  fetch(`https://restcountries.com/v2/alpha/${code}`)
    .then((response) => response.json())
    .then((country) => {
      console.log(country);
      const countryDetails = document.getElementById("country-details");

      countryDetails.innerHTML = `
      <div class="card">
      <img src="${country.flag}" class="card-img-top" alt="${country.name}" />
      <div class="card-body">
        <h5 class="card-title">${country.name} (${country.nativeName})</h5>
        <p class="card-text">Capital: <strong> ${country.capital} </strong></p>
        <p class="card-text">Population: <strong> ${country.population} </strong></p>
        <p class="card-text">Region: <strong> ${country.region} </strong></p>
        <p class="card-text">Subregion: <strong> ${country.subregion} </strong></p>
        <p class="card-text">Timezone: <strong> ${country.timezones} </strong></p>
        <p class="card-text">Currency: <strong> ${country.currencies[0].name} (${country.currencies[0].symbol}) </strong></p>
        <p class="card-text">Languages: <strong> ${country.languages[0].name} (${country.languages[0].nativeName}) </strong></p>
        <p class="card-text">Borders: <strong> ${country.borders} </strong></p>
      </div>
    </div>
      `;
    });
}

document.onload = loadCountries();
document.onload = loadCountryDetails("af");
